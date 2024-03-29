import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { AuthPage } from "./pages/auth-page";
import { AdminPage } from "./pages/admin-page/admin-page";
import { EditPage } from "./pages/edit-page";
import { ProfilePage } from "./pages/profile-page";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/order">
                <OrderPage />
              </Route>
              <Route exact path="/admin/:title">
                <EditPage />
              </Route>
              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/auth">
                <AuthPage />
              </Route>
              <Route exact path="/admin">
                <AdminPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
