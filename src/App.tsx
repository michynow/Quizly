import { Switch, Route } from "react-router";
import "./fontello/css/fontello.css";
import Layout from "./components/Layout";
import CreateQuizPage from "./pages/CreateQuizPage";
import FindQuizPage from "./pages/FindQuizPage";
import InvitePage from "./pages/InvitePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/GlobalStyles";
import DashboardPage from "./pages/DashboardPage";
import { AnimatePresence } from "framer-motion";
import Routes from "./utils/Routes";
const theme = {
  primaryColor: "#5fad56;",
  secondaryColor: "#4d9078;",
  accentColor: "#E65135;",
  accentColorHover: "#b6412c;",
  secondaryColorHover: "#367356;",
  fontColorLight: "#e6ebe0;",
  fontColorDark: "#252424;",
  inputBorderRadius: "5px",
  inputBorderColor: "#ccc",
  buttonTransition: "cubic-bezier(1,.61,.26,.83);",
  widthTablet: "979px",
  widthMobile: "525px;",
  widthDesktop: "1200px;",
  sidebarTransition: "cubic-bezier(.4,.45,.71,.2);",
};

function App() {
  const { ROOT, CREATE_QUIZ, FIND_QUIZ, INVITE } = Routes;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AnimatePresence exitBeforeEnter={true}>
            <Switch>
              <Route path={ROOT} exact>
                <DashboardPage />
              </Route>
              <Route path={CREATE_QUIZ}>
                <CreateQuizPage />
              </Route>
              <Route path={FIND_QUIZ}>
                <FindQuizPage />
              </Route>
              <Route path={INVITE}>
                <InvitePage />
              </Route>
            </Switch>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
