import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { BrowsePage, AddPage } from 'pages';
import { Navigation } from 'layout';
import { useProducts } from 'products';
import { fetchFirstData } from 'products/utils';

const App = () => {
  const { addMultipleProducts } = useProducts();

  useEffect(() => {
    fetchFirstData()
      .then(products => addMultipleProducts(products))
      .catch(error => {
        console.info(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
