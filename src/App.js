import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import Headers from './components/Headers/Headers';
import './App.css';
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <Headers />
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/newPost" element={<NewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
