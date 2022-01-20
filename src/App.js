import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Cards from './components/Cards/Cards';
import Posts from './components/Posts/Posts';
import Headers from './components/Headers/Headers';
import './App.css';
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <Headers />
      {/* <Routes>
        <Route exact path="/posts" >
          <Welcome />
        </Route>
        <Route path="/newPost">
          <Game />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </Routes> */}
      <Router>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/newPost" element={<NewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
