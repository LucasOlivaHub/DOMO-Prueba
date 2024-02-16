import './App.css';
import { Home } from './Screens/Home/Home';
import { Header } from './Components/Header/Header';
import { CardsContainer } from './Screens/CardsContainer/CardsContainer';
import { ServicesContainer } from './Screens/ServicesContainer/ServicesContainer';
import { Footer } from './Screens/Footer/Footer';
import { useEffect, useState } from 'react';
import SpinnerLoader from './Components/SpinnerLoader/SpinnerLoader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className="App">
      <Header/>
      {loading ? <div className='home-loader-container'><SpinnerLoader/></div> : (
        <>
          <Home/>
          <CardsContainer/>
          <ServicesContainer/>
          <Footer/>
        </>   ) }
     
    </div>
  );
}

export default App;
