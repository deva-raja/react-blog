// import RefDemo from './components/RefDemo';
// import FocusInput from './components/FocusInput';
// import RFInputParent from './components/RFInputParent';
// import Portal from './components/Portal';
// import ParentComp from './components/ParentComp';
// import logo from './logo.svg';
// import { Greet } from './components/Greet';
// import Hello from './components/Hello';
// import { Welcome } from './components/Welcome';
// import FuncClick from './components/FuncClick';
// import { ClassClick } from './components/ClassClick';
// import EventHandler from './components/EventHandler';
// import ParentHandler from './components/ParentHandler';
// import ConditionalRender from './components/ConditionalRender';
// import MapRender from './components/MapRender';
// import CssExample from './components/CssExample';
// import Inline from './components/Inline';
// import style from './Style.module.css';
// import Form from './components/Forms';
// import LifeCycleA from './components/LifeCycleA';
// import Fragmentdemo from './components/Fragmentdemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import Click from './components/Click';
// import Hover from './components/Hover';
// import HookUseEffect1 from './components/HookUseEffect1';
// import HookTimer from './components/HookTimer';
// import Hookfetch from './components/Hookfetch';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounter3 from './components/HookCounter3';
// import DataFetching1 from './components/DataFetching1';
// import UseMemo from './components/UseMemo';
// import UseRef1 from './components/UseRef1';
// import UseRef2 from './components/UseRef2';
// import HookCount from './components/HookCount';
// import HookCountM from './components/HookCountM';
// import CustomForm from './components/CustomForm';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blog/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// npx react-codemod update-react-imports