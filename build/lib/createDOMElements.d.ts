import { HTMLElementInterface, OpaqueHandleInterface, RenderElementsProps } from '../types/interfaces';
import { Type } from '../types/types';
declare const createDOMElements: (type: Type, props: RenderElementsProps, internalInstanceHandle: OpaqueHandleInterface) => HTMLElementInterface;
export default createDOMElements;
