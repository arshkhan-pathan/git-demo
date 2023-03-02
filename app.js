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
import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInnformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setislog(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
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

//code changed in production phase\
class Button extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
   random: 0
    }
   }


   render() {
   var min = 1;
   var max = 100;
   var rand =  min + (Math.random() * (max-min));
   handleClick() {
    this.setState ({this.state.random + this.rand})
   }
    return (
      <div>
       <button value="Click me!" onClick={this.handleClick.bind(this)></button>
       </div>
      );

 React.render(<Button />, document.querySelector('#container'));

  }
} 
