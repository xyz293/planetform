import router from './router/index'
import {useRoutes} from 'react-router-dom'
function App() {
  const element = useRoutes(router)
  return (
   element
  )
}
export default App
