import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import Services from "./pages/services.tsx";
import About from "./pages/about.tsx";


function App() {

  return (
<BrowserRouter>
  <Routes>
  <Route path={"/"} element={<Layout />}>
    <Route index element={<Home />} />
    <Route path={`about`} element={<About />}/>
    <Route path={`services`} element={<Services />}/>
  </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
