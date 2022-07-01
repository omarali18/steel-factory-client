import './App.css';
import { Typography } from '@mui/material';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Typography variant="h3" sx={{color:"green"}}>
       omar ali
     </Typography>
    </div>
  );
}

export default App;
