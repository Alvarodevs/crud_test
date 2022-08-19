import { useEffect } from "react";
import { getAllSites } from "./services/sites";
import "./App.css";
import { useDispatch } from "react-redux";
import { initSites } from "./features/sites/siteSlice";
import Header from "./components/header";
import SiteForm from "./components/siteForm";
import SiteList from "./components/siteList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    getAllSites().then((sites) => {
      dispatch(initSites(sites));
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SiteList />} />
          <Route path="/create_site" element={<SiteForm />} />
          <Route path="/edit_site/:id" element={<SiteForm />} />
          <Route path="/:id" element={<SiteForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
