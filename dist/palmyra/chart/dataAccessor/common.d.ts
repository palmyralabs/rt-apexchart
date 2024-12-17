import { accessor, AttributeAccessor } from './types';
declare function getAccessors(yKey: AttributeAccessor | AttributeAccessor[]): accessor<any>[];
declare function getAccessor(v: AttributeAccessor): accessor<any>;
export { getAccessor, getAccessors };
