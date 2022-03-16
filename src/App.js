import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  const settIsVisible = useSelector(state => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        {settIsVisible && <Route path="/settings" element={<Settings />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
