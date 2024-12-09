
import './App.css'
import ArrayColumnChart from './components/horizontalBarChart.tsx/ArrayBarChart.tsx'
import ColumRotatedLabels from './components/horizontalBarChart.tsx/ArrayBarChart.tsx'
import ObjectColumnChart from './components/horizontalBarChart.tsx/ObjectBarChart.tsx'
import KeyedBarChart from './components/horizontalBarChart.tsx/KeyedBarChart.tsx'
import KeyColumnChart from './components/horizontalBarChart.tsx/KeyBarChart.tsx'
import ArrayPieChart from './components/pieChart/ArrayPieChart.tsx'
import ObjectPieChart from './components/pieChart/ObjectPieChart.tsx'
import KeyPieChart from './components/pieChart/KeyPieChart.tsx'
import KeyedPieChart from './components/pieChart/KeyedPieChart.tsx'
import ArrayLineChart from './components/LineChart/ArrayLineChart.tsx'
import ObjectLineChart from './components/LineChart/ObjectLineChart.tsx'
import RangeChart from './components/RangeChart/ArrayRangeChart.tsx'
import ArrayRangeChart from './components/RangeChart/ArrayRangeChart.tsx'
import ObjectRangeChart from './components/RangeChart/ObjectRangeChart.tsx'
import KeyLineChart from './components/LineChart/KeyLineChart.tsx'
import KeyedRangeChart from './components/RangeChart/KeyedRangeChart.tsx'
import ArrayRadarChart from './components/RadarChart/ArrayRadarChart.tsx'
import ArrayBarChart from './components/horizontalBarChart.tsx/ArrayBarChart.tsx'
import ObjectBarChart from './components/horizontalBarChart.tsx/ObjectBarChart.tsx'
import KeyBarChart from './components/horizontalBarChart.tsx/KeyBarChart.tsx'
import ObjectRadarChart from './components/RadarChart/ObjectRadarChart.tsx'


function App() {

  return (
    <>
       <ArrayRangeChart/>    
       <ObjectRangeChart/> 
      {/* <KeyedRangeChart/> */}

       <ArrayRadarChart/>
       <ObjectRadarChart/>
  
       {/* <ArrayLineChart />  
       <KeyLineChart/>   
       <ObjectLineChart />   */}

       <ArrayBarChart/>
       <ObjectBarChart/>
       <KeyBarChart/>
       <KeyedBarChart/>

       <ArrayPieChart />
       <ObjectPieChart />
      <KeyPieChart />
      <KeyedPieChart />

    </>
  )
}

export default App
