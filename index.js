// Code your solution in this file!
const returnFirstTwoDrivers = function ([d1, d2, d3, d4]){
    const firstTwoDrivers = [d1, d2, d3, d4].slice(0, 2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = function ([d1, d2, d3, d4]){
    const lastTwoDrivers = [d1, d2, d3, d4].slice(-2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function fareQuintupler(fare){
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler =  createFareMultiplier(3)



function selectDifferentDrivers([d1, d2, d3, d4], returnFirstTwoDrivers){
   return returnFirstTwoDrivers([d1, d2, d3, d4])
}
