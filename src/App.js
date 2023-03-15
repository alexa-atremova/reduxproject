import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </>
  );
}
export default App;
