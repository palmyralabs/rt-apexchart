import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChartStoreFactoryContext } from '../src/palmyra/chart/query/ChartFactoryContext.ts'
import storeFactory from './wire/StoreFactory.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChartStoreFactoryContext.Provider value={storeFactory}>
      <App />
    </ChartStoreFactoryContext.Provider>
  </StrictMode>,
)
