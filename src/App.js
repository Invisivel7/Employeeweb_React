
import './App.css';
import Header from "./pages/header/Header";
import { Route } from 'react-router-dom';
import NoMatch from './pages/noMatch/noMatch';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;
