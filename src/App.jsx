import { useState } from "react";
import { Signin } from "./components/signin/signin";
import { Posts } from "./components/Posts/Posts";
import { UserProvider } from "./context/username";
import "./style/style.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <UserProvider>
        {!isLogged ? <Signin onEnter={() => setIsLogged(true)} /> : <Posts />}
      </UserProvider>
    </>
  );
}

export default App;
