const firstNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (firstNames) => {
  return getFirstNames(firstNames);
};
console.log(getPeopleInCity(firstNames));
module.exports = getPeopleInCity;
