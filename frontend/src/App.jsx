import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn ? <Dashboard /> : <Login />;

}

export default App;