import Header from "./components/header";
import Profile from "./components/profile";
import Button from "./components/button";
import "./style.css";

function App() {
  return (
    <div>
      <Header title="Welcome to React Props Example" />
      <Profile name="John Doe" age={30} bio="Software Developer" />
      <Button label="Click Me" />
    </div>
  );
}

export default App;
