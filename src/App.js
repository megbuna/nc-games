import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ReviewList } from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
      </Routes>
    </div>
  );
};

export default App;
