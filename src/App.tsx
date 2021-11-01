import { Switch, Route } from 'react-router';
import './App.scss';
import Layout from './components/layout/Layout';
import CreateQuizPage from './pages/CreateQuizPage';
import DashboardPage from './pages/DashboardPage';
import FindQuizPage from './pages/FindQuizPage';
import InvitePage from './pages/InvitePage';
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
