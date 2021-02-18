import React, { useState, useEffect } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js"
import { Layout } from "./Components/Layout/Layout.js"
import { Home } from "./Routes/Home/Home.js"
import { About } from "./Routes/About/About.js"
import { Service } from "./Routes/Service/Service.js"
import { Portfolio } from "./Routes/Portfolio/Portfolio.js"
import { Contato } from "./Routes/Contato/Contato.js"
import { Nav } from "./Components/Nav/Nav.js"
import { AtendimentoOnline } from "./Components/Whatsapp/Whatsapp.js"
import { Footer } from "./Components/Footer/Footer.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  primary_color: "#000",
  secundary_color: "#fff",
  ternary_color: "#F5C32E",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif"
};


function App() {

  const [isOpenAtendOnline, setisOpenAtendOnline] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCloseIcon = () => {
    setIsOpen(!isOpen)
  }

  // retorna o tamanho da tela
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  // retorna o tamanho da tela

  const AuthenticatedRoutes = () => {
    return (
      <Router>
        <Route path="/about" exact component={About} />
        <Route path="/servicos" component={Service} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contato" component={Contato} />
      </Router >
    )
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav isOpen={isOpen} toggleCloseIcon={toggleCloseIcon} sizeWindow={size.width} />
          <Switch>
            <Route path="/" exact>
              <Home sizeWindow={size.width} />
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>
          <AtendimentoOnline isOpenAtendOnline={isOpenAtendOnline} setIsOpenAtendOnline={setisOpenAtendOnline} />
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
