import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import RecyclePage from "./pages/RecyclePage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/sell">
          <SellPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
