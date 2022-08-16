import {useEffect} from 'react'
import{ getAllSites}  from './services/sites'
import './App.css'
import { useDispatch } from 'react-redux'
import { initialSites } from './features/sites/siteSlice'

function App() {

  const dispatch = useDispatch();
    
  useEffect(() => {
    getAllSites()
      .then(() => {
        dispatch(initialSites())
      })
  },[])
    
  return (
    <div className="App">
      <h2>Hello world</h2>
    </div>
  )
}

export default App
