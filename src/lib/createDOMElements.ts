import {
  HTMLElementInterface,
  OpaqueHandleInterface,
  RenderElementsProps,
} from '../types/interfaces';
import getLaneNum from './getLaneNum';
import hasTransition from './hasTransition';
import setTransitionColor from './setTransitionColor';
import { Type } from '../types/types';
import hasSuspense from './hasSuspense';

const createDOMElements = (
  type: Type,
  props: RenderElementsProps,
  internalInstanceHandle: OpaqueHandleInterface
): HTMLElementInterface => {
  const { className, id, style, onClick, onChange, placeholder } = props;
  const element: HTMLElementInterface = document.createElement(type);

  element.className = className || '';

  if (id) {
    element.id = id;
  }

  if (onClick) {
    element.addEventListener('click', onClick);
  }
  if (onChange) {
    element.addEventListener('input', onChange);
  }

  if (placeholder) {
    element.placeholder = placeholder;
  }

  if (props.src) {
    element.src = props.src;
  }

  if (style) {
    Object.keys(style).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: 7015
      element.style[key] = style[key];
    });
  }

  if (hasSuspense(internalInstanceHandle)) {
    element.style.border = 'solid lightblue';
    element.classList.add('Suspense');
    const tooltip = document.createElement('span');
    tooltip.innerHTML = '&#128570 Phew! It took me 1223ms to load!';
    tooltip.className = 'SuspensePopup';
    element.appendChild(tooltip);
  }
  const laneNum = getLaneNum(internalInstanceHandle);
  if (hasTransition(laneNum)) {
    element.style.backgroundColor = setTransitionColor(laneNum);
    element.classList.add('TransitionLane' + (laneNum - 6));
  }

  return element;
};

export default createDOMElements;
