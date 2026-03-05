import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Demo from './pages/Demo';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demos/:slug" component={Demo} />
      {/* Fallback for 404 */}
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}
