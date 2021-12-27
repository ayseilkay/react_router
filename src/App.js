

import "./App.css";

import { Route, Link, Router,Switch } from 'react-router-dom';
import About from "./component/About";
import Home from "./component/Home";
// import Layout from "./component/Layout";
import Users from "./component/Users";
import User from "./component/User";
//Sadece slash verirsek ilk sayfa olarak sayılır.
function App() {
  return (
   
   <Router>

     <div>
       <nav>
         <ul>
           <li>
                <Link to="/">Home</Link>
           </li>
           <li>
                  <Link to="/about">About</Link>
           </li>
           <li>
           <Link to="/users">Users</Link>
           </li>
           <li>
           <Link to="/user">User</Link>
           </li>
         </ul>
       </nav>
       <Switch>
          <Route path="/" exact component={Home}>  </Route>
          <Route path="/about"  component={About}>  </Route>
          <Route path="/users"  component={Users}>  </Route>
          <Route path="/user/:id"  component={User}>  </Route>
       </Switch>
     </div>
   </Router>
  );
}


export default App;
