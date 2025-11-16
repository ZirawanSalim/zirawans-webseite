import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projekte from '../Pages/Projekte.jsx';
import ProjekteArmband from '../Pages/ProjekteArmband.jsx';
import ProjektePortfolio from '../Pages/ProjektePortfolio.jsx';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Projekte} />
                <Route path="/armband" component={ProjekteArmband} />
                <Route path="/portfolio" component={ProjektePortfolio} />
            </Switch>
        </Router>
    );
}