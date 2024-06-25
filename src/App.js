
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <div className='flex'>
    <Navbar/>
   </div>
    <h1 className='bg-yellow-400 text-red-600  '><marquee>Welcome to TheScoop! Your Daily Dose of News</marquee></h1>
    <Content />
    <Footer />
    </div>
  );
}

export default App;
