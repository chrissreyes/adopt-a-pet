import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  return (
    <Router>
    <div>
      <Navigation />
      <switch>
        
        <Route path='/:type/:id'> <PetDetailsPage/> </Route>
        <Route path='/search/'> <SearchPage/> </Route>
        <Route path='/pet-details-not-found'> <PetDetailsNotFound/> </Route>
        <Route path='/:type?'><HomePage /></Route>
        
      </switch>
    </div>
    </Router>
  );
}

export default App;
