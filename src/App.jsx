import {useEffect} from 'react'
import{ getAllSites}  from './services/sites'
import './App.css'
import { useDispatch } from 'react-redux'
import { initSites } from './features/sites/siteSlice'

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
      <h2>Hello world</h2>
    </div>
  )
}

export default App
