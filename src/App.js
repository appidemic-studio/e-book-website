import React from 'react';
import Navbar from './components/Navbar';
import SearchArea from "./components/SearchArea";
import Library from './components/Library';
import ReadBook from './pages/ReadBook';
import WishList from './pages/WishList';
import Subscriptions from './pages/Subscriptions';
import Wallet from './pages/Wallet';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>

    <Navbar />
    <SearchArea />

    <Switch>
    <Route path = "/e-book-website/" exact component = {Library} />
    <Route path = "/e-book-website/read/:id" component = {ReadBook} />
    <Route path = "/e-book-website/wishlist" component = {WishList} />
    <Route path = "/e-book-website/subscriptions" component = {Subscriptions} />
    <Route path = "/e-book-website/wallet" component = {Wallet} />
    </Switch>

    </Router>
  );
}

export default App;