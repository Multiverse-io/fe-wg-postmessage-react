import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const HomePage = () => (
  <>
    <h1>Hello from React!</h1>
    <ul>
      <li><Link to="/quiz">Quiz</Link></li>
    </ul>
  </>
)

const QuizPage = () => (
  <>
    <h1>Hello from React!</h1>
    <form>
      How many pence to a shilling? <br />
      <label><input type="radio" name="question-1" value="10" /> 10</label><br />
      <label><input type="radio" name="question-1" value="12" /> 12</label><br />
      <label><input type="radio" name="question-1" value="14" /> 14</label><br />
      <button type="submit">Submit</button>
    </form>
  </>
)

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} /> {/* Catch-all route */}
      <Route path="/quiz" element={<QuizPage />} />
      {/*<Route path="/profile/:username" element={ProfileDetailPage} />*/}
      {/*<Route path="/feed" element={FeedPage} />*/}
    </Routes>
  </Router>
)

const root = createRoot(document.getElementById('react-app'));
root.render(<App />);


