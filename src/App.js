import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import SettingsContainer from "./components/layout/SettingsContainer";
import DishSettings from "./pages/DishSettings";
import SectionSettings from "./pages/SectionSettings";
import BeerSettings from "./pages/BeerSettings";
import Help from "./pages/Help";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const settIsVisible = useSelector(state => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {!settIsVisible && <Route path="/login" element={<Login />} />}
        {settIsVisible && (
          <Route path="/settings/*" element={<SettingsContainer />}>
            <Route path="beers" element={<BeerSettings />} />
            <Route path="dishes" element={<DishSettings />} />
            <Route path="sections" element={<SectionSettings />} />
            <Route path="help" element={<Help />} />
            <Route path="*" element={<Navigate to="/settings/beers" />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
