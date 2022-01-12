const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return (fare) => {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, func) {
    return func(array);
}