var hasSuspense = function (internalInstanceHandle) {
    var fiber = internalInstanceHandle;
    var traversalCount = 0;
    var traversalLimit = 5;
    while (fiber && traversalCount < traversalLimit) {
        if (fiber.tag === 13 /* FiberTags.suspense */) {
            return true;
        }
        fiber = fiber.return;
        traversalCount += 1;
    }
    return false;
};
export default hasSuspense;
