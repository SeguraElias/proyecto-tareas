import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListTasks from './components/ListTasks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListTasks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
