import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/SubmitOrder/Register";
import Footer from "./components/Footer/Footer";
import SelectDesert from "./components/SubmitOrder/SelectDesert";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminDashboard} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/submit" component={SelectDesert} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
