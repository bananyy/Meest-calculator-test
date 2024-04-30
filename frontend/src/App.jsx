import { Routes, Route, Link } from 'react-router-dom'
import { AdminLogin } from "./components/pages/AdminLogin";
import { HomePage } from "./components/pages/HomePage";
import { AdminMainPage } from './components/pages/AdminMainPage';

function App() {
  return (
    <>
    <div></div>
      <Routes>
        <Route path='/Meest-calculator-test' element={<HomePage />} />
        <Route path='/Meest-calculator-test/admin' element={<AdminLogin />} />
        <Route path='/Meest-calculator-test/dashboard' element={<AdminMainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
