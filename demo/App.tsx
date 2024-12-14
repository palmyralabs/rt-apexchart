
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import { MainLayout } from "./layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import BarChartPage from "./pages/chart/BarChartPage";
import './themes/colorDef.css';
import './themes/blue/Colors.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Palmyra Docs' />} >
            <Route path="/" element={<Outlet />} >
              <Route path="ui/home" element={<HomePage />} />
              <Route path="ui/chart/demo" element={<Outlet />} >
                <Route path="multiLineChart" element={<BarChartPage />} />
              </Route>
              <Route path="*" element={<h1>Under Construction</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
