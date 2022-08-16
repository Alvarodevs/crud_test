import {useEffect} from 'react'
import{ getAllSites}  from './services/sites'
import './App.css'
import { useDispatch } from 'react-redux'
import { initSites } from './features/sites/siteSlice'
import Header from './components/header'
import SiteForm from './components/siteForm'
import SiteList from './components/siteList'

function App() {

  const dispatch = useDispatch();
    
  useEffect(() => {
    getAllSites()
      .then((sites) => {
        dispatch(initSites(sites))
      })
  },[])
    
  return (
    <div className="App">
      <Header/>
      <SiteForm/>
      <SiteList/>
    </div>
  )
}

export default App
