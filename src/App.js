import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ReviewList } from './components/ReviewList';
import { SingleReview } from './components/SingleReview';

function App() {
  return (
      <div className="App">
        <Header className="AppHeader"/>
        <NavBar />
        <Routes>
          <Route path="/" element={<ReviewList />}></Route>
          <Route path="/reviews" element={<ReviewList />}></Route>
          <Route path="/reviews/category/:category" element={<ReviewList/>}></Route>
          <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        </Routes>
      </div>
  );
};

export default App;
