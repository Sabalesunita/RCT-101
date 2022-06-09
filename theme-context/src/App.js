
import { useContext } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';



function App() {
  const { isLight } = useContext(ThemeContext)


  return (
    <div className={`App ${isLight ? "Light" : "Dark"}`}>

      <Navbar />
    
    </div>
  );
}

export default App;