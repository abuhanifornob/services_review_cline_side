import logo from './logo.svg';
import './App.css';
import Header from './Pages/Sharead/Header/Header';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routers/Routers';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
