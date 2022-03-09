import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Navigate} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Dashboards from './pages/Dashbords';

function App() {
  return (
       <Provider store={store}>
        <Routes>
         <Route path="/" element={<Navigate to="/dashboard/home"/>}/>
         <Route path='/dashboard/:menu' element={<Dashboards/>}/>
        </Routes>
       </Provider> 
  );
}
export default App;