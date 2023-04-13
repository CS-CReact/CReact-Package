/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { DefaultEventPriority } from 'react-reconciler/constants';
import createDOMElements from './createDOMElements';
var getHostConfig = function () { return ({
    createInstance: function (type, props, rootContainerInstance, hostContext, internalInstanceHandle
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    ) { return createDOMElements(type, props, internalInstanceHandle); },
    createTextInstance: function (text, rootContainerInstance, hostContext, internalInstanceHandle
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    ) { return document.createTextNode(text); },
    appendChildToContainer: function (container, child) {
        container.appendChild(child);
    },
    appendChild: function (parent, child) {
        parent.appendChild(child);
    },
    appendInitialChild: function (parent, child) {
        parent.appendChild(child);
    },
    insertBefore: function (parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild);
    },
    insertInContainerBefore: function (container, child, beforeChild) {
        container.insertBefore(child, beforeChild);
    },
    removeChild: function (parentInstance, child) {
        parentInstance.removeChild(child);
    },
    removeChildFromContainer: function (container, child) {
        container.removeChild(child);
    },
    //
    now: Date.now,
    getRootHostContext: function () { },
    prepareForCommit: function () { },
    resetAfterCommit: function () { },
    getChildHostContext: function () { },
    shouldSetTextContent: function () { },
    clearContainer: function () { },
    prepareUpdate: function (instance, type, oldProps, newProps, rootContainer, hostContext) { },
    commitUpdate: function (instance, updatePayload, type, prevProps, nextProps, internalHandle) {
        if (isTransition(internalHandle)) {
            // eslint-disable-next-line no-param-reassign
            instance.style.backgroundColor = '#66ff99';
            instance.classList.add('c-Transition');
        }
    },
    commitTextUpdate: function (textInstance, oldText, newText) {
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unsafe-assignment
        textInstance.nodeValue = newText;
    },
    finalizeInitialChildren: function () { },
    shouldDeprioritizeSubtree: function (type, nextProps) { return !nextProps.hidden; },
    detachDeletedInstance: function () { },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    getCurrentEventPriority: function () {
        return DefaultEventPriority;
    },
    hideInstance: function () { },
    unhideInstance: function () { },
    commitMount: function (instace, type, props, internalInstanceHandle) { },
    supportsMutation: true,
}); };
export default getHostConfig;
