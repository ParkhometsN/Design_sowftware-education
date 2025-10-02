import { useState, useEffect } from "react"
import EnterAppDSW from "./components/EnterApp"
import DashBoard from "./components/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const savedAuth = localStorage.getItem('isLoggedIn');
    if (savedAuth === 'true') {
      setIsLoggedIn(true);
    }

  }, []);
  const LogSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  const LogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }
  
  return (
    <div className="app">
      {isLoggedIn ?(
        <DashBoard onLogout={LogOut} />
      ):(
        <div className="flex justify-center items-center min-h-screen"> 
          <div className="w-full max-w-[542px] p-4 flex flex-col items-center gap-[30px]"> 
            <EnterAppDSW onLoginSuccess={LogSuccess}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;