import { Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Beranda />}/>
      </Route>
    </Routes>
  );
}

export default App;