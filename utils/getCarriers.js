const mock = require("../mockData/mockData.js");
const mockData = mock.mockData;

exports.getCarriers = (insuranceType, state) => {
  // if insurance type and state are not provided, just return all the available carriers
  if (!insuranceType && !state) {
    return mockData.carriers.map((item) => item.id);
  } else {
    // search carriers by insurance type
    if (insuranceType && !state) {
      return mockData.carriers
        .map((item) => {
          const nextArr = item.insuranceTypes.filter((nextItem) => {
            return nextItem.toUpperCase() === insuranceType.toUpperCase();
          });
          if (nextArr.length > 0) {
            return item.id;
          } else {
            return null;
          }
        })
        .filter((item) => (!item ? false : true));
    } else if (state && !insuranceType) {
      // search carriers by state
      return mockData.carriers
        .map((item) => {
          const nextArr = item.states.filter((nextItem) => {
            return nextItem.toUpperCase() === state.toUpperCase();
          });
          if (nextArr.length > 0) {
            return item.id;
          } else {
            return null;
          }
        })
        .filter((item) => (!item ? false : true));
    } else {
      // search carriers by both state and insurance type
      return mockData.carriers
        .map((item) => {
          const stateArr = item.states.filter((nextItem) => {
            return nextItem.toUpperCase() === state.toUpperCase();
          });
          const insArr = item.insuranceTypes.filter((nextItem) => {
            return nextItem.toUpperCase() === insuranceType.toUpperCase();
          });
          if (stateArr.length > 0 && insArr.length > 0) {
            return item.id;
          } else {
            return null;
          }
        })
        .filter((item) => (!item ? false : true));
    }
  }
};
