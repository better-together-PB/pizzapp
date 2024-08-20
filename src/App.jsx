import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import CreatePizza from "./pages/CreatePizza";
import EditPizza from "./pages/EditPizza";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:typeOfPizza" element={<Menu />} />
        <Route path="/createPizza" element={<CreatePizza />} />
        <Route path="/editPizza/:id" element={<EditPizza />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
