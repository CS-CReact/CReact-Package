import { OpaqueHandle } from 'react-reconciler';
import { Props } from '../types/types';
export interface OpaqueHandleInterface extends OpaqueHandle {
    return: OpaqueHandleInterface | null;
    tag: number | null;
    lanes: number | null;
}
export interface HTMLElementInterface extends HTMLElement {
    placeholder?: string;
    src?: string;
}
export interface RenderElementsProps extends Props {
    className?: string;
    id?: string;
    onChange?: () => void;
    onClick?: () => void;
    placeholder?: string;
    src?: string;
    style?: {
        [key: string]: string;
    };
}
