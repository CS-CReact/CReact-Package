var hasTransition = function (laneNum) {
    return laneNum >= 6 /* FiberLanes.TransitionHydrationLane */ &&
        laneNum <= 22 /* FiberLanes.TransitionLane16 */;
};
export default hasTransition;
