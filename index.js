// Code your solution in this file!
const drivers = ["Stepehn", "Sarah", "John", "David"]
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}
  
    const quad = createFareMultiplier(2)
    console.log(quad(4))

    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)
    const selectDifferentDrivers = function (drivers, driverToReturn) {
        return driverToReturn(drivers)
    }
    console.log(selectDifferentDrivers(name, returnLastTwoDrivers))