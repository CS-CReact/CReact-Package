import hasSuspense from './hasSuspense';
var createDOMElements = function (type, props, internalInstanceHandle) {
    var className = props.className, id = props.id, style = props.style, onClick = props.onClick, onChange = props.onChange, placeholder = props.placeholder;
    var element = document.createElement(type);
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
        Object.keys(style).forEach(function (key) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: 7015
            element.style[key] = style[key];
        });
    }
    if (hasSuspense(internalInstanceHandle)) {
        element.style.border = 'solid lightblue';
        element.classList.add('Suspense');
        var tooltip = document.createElement('span');
        tooltip.innerHTML = '&#128570 Phew! It took me 1223ms to load!';
        tooltip.className = 'SuspensePopup';
        element.appendChild(tooltip);
    }
    return element;
};
export default createDOMElements;
