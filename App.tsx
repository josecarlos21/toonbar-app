import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
import { Prepare } from './pages/Prepare';
import { Favorites } from './pages/Favorites';
import { NavBar } from './components/NavBar';

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <NavBar />
        </>
      } />
      <Route path="/favorites" element={
        <>
          <Favorites />
          <NavBar />
        </>
      } />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/prepare/:id" element={<Prepare />} />
    </Routes>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}