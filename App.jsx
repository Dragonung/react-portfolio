import Header from './src/components/header/Header';
import Navigation from './src/components/navigation/Navigation';
import Footer from './src/components/footer/Footer';
import './App.css';


function App() {
  return(
    <div className = "react-portfolio">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;