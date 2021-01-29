import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "./layouts/Dashbord.js";
import verification from "./layouts/verification";

const hist = createBrowserHistory();


export default function App() {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Dashboard} />
                <Route path="/" component={verification} />
                {/*<Redirect from="/" to="/admin/dashboard" />*/}
            </Switch>
        </Router>
    );
}