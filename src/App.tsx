import { Switch, Route } from 'react-router';
import './App.scss';
import Layout from './components/layout/Layout';
import CreateQuizPage from './pages/CreateQuizPage';
import DashboardPage from './pages/DashboardPage';
import FindQuizPage from './pages/FindQuizPage';
import InvitePage from './pages/InvitePage';
import styled, {ThemeProvider} from 'styled-components';
/// <reference types="styled-components/cssprop" />
const theme = {
  themeColor1:'#5fad56;',
themeColor2:'#f2c14e;',
themeColor3:'#f78154;',
themeColor4:'#4d9078;',
themeColor4Hover:'#367356;',
themeColor5:'#e6ebe0;',
accentRed:'#F44336;',
fontColorDark:'#707070;',
buttonTransition:'cubic-bezier(1,.61,.26,.83);',
widthTablet:'979px',
widthMobile:'525px;',
widthDesktop:'1200px;',
sidebarTransition:'cubic-bezier(.4,.45,.71,.2);',
}
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <DashboardPage/>
          </Route>
          <Route path="/create-quiz">
            <CreateQuizPage/>
          </Route>
          <Route path="/find-quiz">
            <FindQuizPage/>
          </Route>
          <Route path="/invite">
            <InvitePage/>
          </Route>
        </Switch>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
