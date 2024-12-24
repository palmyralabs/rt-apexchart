
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
import GroupedBarChartPage from "./pages/chart/GroupedBarChartPage";
import DoughnutChartPage from "./pages/chart/DoughnutChartPage";
import ScatterChartPage from "./pages/chart/ScatterChartPage";
import PolarAreaChartPage from "./pages/chart/PolarAreaChartPage";
import RadarChartPage from "./pages/chart/RadarChartPage";
import StackedBarChartPage from "./pages/chart/StackedBarChartPage";


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
                <Route path="barChart" element={<BarChartPage />} />
                <Route path="lineChart" element={<LineChartPage />} />
                <Route path="pieChart" element={<PieChartPage />} />
                <Route path="doughnutChart" element={<DoughnutChartPage />} />
                <Route path="scatterChart" element={<ScatterChartPage />} />
                <Route path="groupedBarChart" element={<GroupedBarChartPage />} />
                <Route path="polarAreaChart" element={<PolarAreaChartPage />} />
                <Route path="radarChart" element={<RadarChartPage />} />
                <Route path="stackedBarChart" element={<StackedBarChartPage/>} />
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
