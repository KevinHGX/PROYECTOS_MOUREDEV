import "./styles/styles.scss";
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Ranking from './components/Ranking';
import Select from './components/Select';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [player,usePlayer] = useState({name:'Kevin',
                                      score:270,
                                      ranking:4,
                                      category:'Video Games',
                                      level:'hard', 
                                      status:true});

  const location = useLocation();

  return (<>
        <UserContext.Provider value={player}>
          <Navbar/>
            <AnimatePresence mode="wait">
              <Routes location={location} key={ location.pathname }>              
                  <Route path='/Home' element={ <Home /> } />
                  <Route path='/Ranking' element={ <Ranking /> } />
                  <Route path='/Select' element={ <Select /> } />
              </Routes>
            </AnimatePresence>
        </UserContext.Provider>
  </>);
}

export default App;
