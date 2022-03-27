
import './App.css';
import Layout from './component/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Password from './component/Password';
import Success from './component/Success';


function App() {
  return (
    <Router>
      
    <Layout>
      <Routes>
       
        <Route path='/' element={<Password/>} />
        <Route path = '/success' element={<Success/>}/>
        
      </Routes>
    </Layout>

    </Router>
  );
}

export default App;
