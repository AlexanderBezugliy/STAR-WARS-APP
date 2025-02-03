import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PeoplePage from '../components/pages/PeoplePage/PeoplePage';
import HomePage from '../components/pages/HomePage/HomePage';
import Header from '../components/Header/Header';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import SinglePersonPage from '../components/pages/SinglePersonPage/SinglePersonPage';
import FavoritesPage from "../components/pages/FavoritesPage/FavoritesPage";
import './App.css';
import SearchPage from "../components/pages/SearchPage/SearchPage";


const App = () => {
    return (
        <Router>
            <div className='wrapper'>
                <Header />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/people' element={<PeoplePage />} />
                    <Route path='/people/:id' element={<SinglePersonPage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                    <Route path='/not-found' element={<NotFoundPage />} />
                    
                    {/* Маршрут для Not Found (404) */}
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

