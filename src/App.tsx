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
const theme = {
  themeColor1: "#5fad56;",
  themeColor2: "#f2c14e;",
  themeColor3: "#f78154;",
  themeColor4: "#4d9078;",
  themeColor4Hover: "#367356;",
  themeColor5: "#e6ebe0;",
  inputBorderRadius:'5px',
  inputBorderColor:'#ccc',
  accentRed: "#F44336;",
  fontColorDark: "#252424;",
  buttonTransition: "cubic-bezier(1,.61,.26,.83);",
  widthTablet: "979px",
  widthMobile: "525px;",
  widthDesktop: "1200px;",
  sidebarTransition: "cubic-bezier(.4,.45,.71,.2);",
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AnimatePresence exitBeforeEnter={true}>
            <Switch>
              <Route path="/" exact>
                <DashboardPage />
              </Route>
              <Route path="/create-quiz">
                <CreateQuizPage />
              </Route>
              <Route path="/find-quiz">
                <FindQuizPage />
              </Route>
              <Route path="/invite">
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
