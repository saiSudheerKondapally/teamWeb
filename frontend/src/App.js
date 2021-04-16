import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path='/' component={Homescreen} exact/>

      </Router>
    </>
  );
}

export default App;
