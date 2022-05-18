import logo from "./logo.svg";
import "./App.css";
import { Title } from "./App.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyle";

const theme = {
  colors: {
    header: "purple",
    body: "#fff",
    footer: "#003333",
  },
};

const { REACT_APP_SPACE_ID, REACT_APP_CDN_TOKEN } = process.env;

console.log("Env variables", REACT_APP_CDN_TOKEN, REACT_APP_SPACE_ID);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Title>
          <h1>Hello Testing Library React</h1>
          <h2>my-api-key</h2>
        </Title>
      </div>
    </ThemeProvider>
  );
}

export default App;
