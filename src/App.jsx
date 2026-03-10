import { useState } from "react";
import { Signin } from "./components/signin/signin";
import { PostPanel } from "./components/Posts/PostPanel";
import { UserProvider } from "./context/username";
import "./style/style.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <UserProvider>
        {!isLogged ? <Signin onEnter={() => setIsLogged(true)} /> : <PostPanel />}
      </UserProvider>
    </>
  );
}

export default App;
