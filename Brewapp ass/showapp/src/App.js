
import './App.css';
import Headers from './components/Header';
import {  Route, Routes } from 'react-router-dom';
import Trending from './components/Trending';
import Shows from "./components/Shows";
import Latest from './components/Latest';
import Popular from './components/Popular';
import Genius from './components/Genius';
import Temple from './components/Temple';
import Void from './components/Void';

function App() {
  return (
    <>
      <header>
        <Headers></Headers>
      </header>
      <main>
          <Routes>
              <>
                <Route path = "/trending"element={<Trending/>}></Route>   
                <Route path = "/latest"element={<Latest/>}></Route>   
                <Route path = "/popular"element={<Popular/>}></Route>   
                <Route path = "/genius"element={<Genius/>}></Route>   
                <Route path = "/temple"element={<Temple/>}></Route>   
                <Route path = "/void"element={<Void/>}></Route>   
                <Route path = "/shows"element={<Shows/>}></Route>   
              </>
          </Routes>
      </main>
    </>
  );
}

export default App;
