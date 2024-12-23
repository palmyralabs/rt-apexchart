
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import { MainLayout } from "./layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import BarChartPage from "./pages/chart/BarChartPage";
import './themes/colorDef.css';
import './themes/blue/Colors.css'
import MultiLineChartPage from "./pages/chart/MultiLineChartPage";
import LineChartPage from "./pages/chart/LineChartPage";
import PieChartPage from "./pages/chart/PieChartPage";
import DoughnutChart from "./components/DonutChart/DoughnutChart";
import ScatterChartPage from "./pages/chart/ScatterChartPage";
import ArrayMultiLineChart from "./components/LineChart/MultiLineChart";
import GroupedBarChartPage from "./pages/chart/GroupedBarChartPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Palmyra Docs' />} >
            <Route path="/" element={<Outlet />} >
              <Route path="ui/home" element={<HomePage />} />
              <Route path="ui/chart/demo" element={<Outlet />} >
                <Route path="multiLineChart" element={<MultiLineChartPage />} />
                <Route path="barChart" element={<BarChartPage />}/>
                <Route path="lineChart" element={<LineChartPage/>}/>
                <Route path="pieChart" element={<PieChartPage/>}/>
                <Route path="donutChart" element={<DoughnutChart/>}/>
                <Route path = "scatterChart" element={<ScatterChartPage/>}/>
                <Route path = "groupedBarChart" element = {<GroupedBarChartPage/>}/>
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
