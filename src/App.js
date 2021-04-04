import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
    document.body.style = 'background-color: #F5F5F5;';
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;