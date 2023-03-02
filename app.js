<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<h1>Version 4 modification</h1>
<<<<<<< HEAD
=======

>>>>>>> fix/ui-changes-v1
import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const storedUserLoggedInnformation = localStorage.getItem("isLoggedIn");
=======
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
>>>>>>> fix/ui-changes-v1

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
<<<<<<< HEAD
    setislog(true);
=======
    setIsLoggedIn(true);
>>>>>>> fix/ui-changes-v1
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
<<<<<<< HEAD
    <AuthContext.Povider
=======
    <AuthContext.Provider
>>>>>>> fix/ui-changes-v1
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
