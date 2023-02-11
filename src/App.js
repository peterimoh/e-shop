import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Homepage} from "./container/homepage";
import {LoginScreen, RegisterScreen} from "./container/auth";
import {AllProducts, ProductsInCategory, SearchResult} from "./container/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/auth/login'} element={<LoginScreen />}/>
          <Route path={'/auth/register'} element={<RegisterScreen />}/>
          <Route path={'/products'} element={<AllProducts/>} />
          <Route path={'/products-in-category'} element={<ProductsInCategory/>} />
          <Route path={'/search-result'} element={<SearchResult/>} />
      </Routes>
    </Router>
  );
}

export default App;
