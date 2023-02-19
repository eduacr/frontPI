import "./App.css";
import { routes } from "./Routes";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Routes/NotFound";
import FormLogin from "./Routes/FormLogin";
import Layout from "./Components/Layout";
import FormSingIn from "./Routes/FormSingIn";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<FormLogin />} />
          <Route path={routes.singin} element={<FormSingIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
