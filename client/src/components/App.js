import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kebabs from "./Kebabs";
import Login from "./Login";
import UserPage from "./UserPage";
import NavBar from "./NavBar";
import Favorites from "./Favorites";
import Reviews from "./Reviews";



function App() {
  const [user, setUser] = useState(null); 
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    <div style={{
        minHeight: '100vh',
        backgroundSize: 'cover', 
        backgroundImage: 'url("https://st.depositphotos.com/1257064/1737/v/950/depositphotos_17377023-stock-illustration-grilled-meat-kebab.jpg")', 
        padding: "100px",
        textAlign: "center",
        }}>
      <Login onLogin={setUser} />
      </div>)
    
     return (
  <div style={{color: 'black', textAlign: 'center', fontStyle: 'italic'}}>
    <Router>
      <NavBar user={user} setUser={setUser}  />
      <Switch>
        <Route exact path="/">
          <UserPage user={user} setUser={setUser} />
        </Route>
        <Route path="/F-Favorites"> 
          <Favorites user={user} />
        </Route>
        <Route path="/K-Kebabs" >
          <Kebabs user={user}  /> 
        </Route>
        <Route path="/R-Review">
          <Reviews user={user} setUser={setUser}  />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;