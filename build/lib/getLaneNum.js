var getLaneNum = function (internalInstanceHandle) {
    var count = 0;
    var fiber = internalInstanceHandle;
    while (fiber && count < 10) {
        if (fiber.lanes !== null) {
            var laneNum = Math.log2(fiber.lanes);
            if (laneNum > -Infinity) {
                return laneNum;
            }
        }
        fiber = fiber.return;
        count += 1;
    }
    return 0;
};
export default getLaneNum;
