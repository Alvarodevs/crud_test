import { useEffect, useState } from "react";
import { getAllSites } from "./services/sites";
import "./App.css";
import { useDispatch } from "react-redux";
import { initSites } from "./features/sites/siteSlice";
import Header from "./components/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/home";
import SiteDetail from "./views/siteDetail/siteDetail";
import { APP_STATE } from "./utils/constants";
import Spinner from "./components/spinner";
import Error from "./components/error";



function App() {
  const [appState, setAppState] = useState(APP_STATE.INIT);
  const dispatch = useDispatch();
  

  useEffect(() => {
    setAppState(APP_STATE.LOADING)
    getAllSites()
      .then((sites) => {
        return (
          setAppState(APP_STATE.OK),
          dispatch(initSites(sites))
        )
      })
      .catch(error => {
        setAppState(APP_STATE.KO);
        console.log(error)
      })
  }, []);

  return (
    <div className="App">

      {appState === 'loading' && <Spinner/>}

      {appState === 'ok' && <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_site" element={<SiteDetail />} />
          <Route path="/site/:id" element={<SiteDetail/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        {appState === 'ko' && <Navigate replace to={'/'}/>}
      </BrowserRouter>}

      

    </div>
  );
}

export default App;
