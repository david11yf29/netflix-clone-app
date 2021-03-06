import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";

import { auth } from "./firebase";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  // this will give back user from state
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  // dispatch

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

// pk_test_51IKZiqKxHPB9EnnoyBzgee6ZvZ3thqGpmzrCibtFhKGjRD5RVls8Tl9MveYIlyVq8uigMgvB3OUMGRHSzxnd7NWy002Lb22Qb6
