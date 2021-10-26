import { Switch, Route } from 'react-router';
import './App.scss';
import Layout from './components/layout/Layout';
function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>

          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
