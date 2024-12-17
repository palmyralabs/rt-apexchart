import { ChartStoreFactory } from "@palmyralabs/palmyra-wire";
import { createContext } from "react";

const nullFactory: any = null;
const ChartStoreFactoryContext = createContext<ChartStoreFactory<any, any>>(nullFactory);

export { ChartStoreFactoryContext };