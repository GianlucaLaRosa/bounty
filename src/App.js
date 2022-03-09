import Layout from "./components/layout/layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
