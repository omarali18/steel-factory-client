import './App.css';
import { Typography } from '@mui/material';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Client from './pages/Client/Client';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="client" element={<Client />} />
    </Routes>
  </BrowserRouter>
      
     <Typography variant="h3" sx={{color:"green"}}>
       omar ali
     </Typography>
    </div>
  );
}

export default App;
