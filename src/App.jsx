import HeaderNav from "./components/HeaderNav";
import Main from "./components/Main";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <HeaderNav />
      <Main/>
    </GlobalProvider>
    
  )
}

export default App