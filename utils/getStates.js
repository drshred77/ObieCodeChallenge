const mock = require("../mockData/mockData.js");
const mockData = mock.mockData;

exports.getStates = (insuranceType, carrier) => {
  if (!insuranceType && !carrier) {
    // return all available states
    const stateArr = mockData.carriers.map((item) => [...item.states]);
    const mergedArr = [].concat.apply([], stateArr);
    return [...new Set(mergedArr)];
  } else if (insuranceType && !carrier) {
    // search by insurance type only
    const stateArr = mockData.carriers
      .map((item) => {
        const nextArr = item.insuranceTypes.filter((nextItem) => {
          return nextItem.toUpperCase() === insuranceType.toUpperCase();
        });
        if (nextArr.length > 0) {
          return item.states;
        } else {
          return null;
        }
      })
      .filter((item) => (!item ? false : true));

    const mergedArr = [].concat.apply([], stateArr);
    return [...new Set(mergedArr)];
  } else if (!insuranceType && carrier) {
    // search by carrier only
    const stateArr = mockData.carriers
      .map((item) => {
        if (item.id.toUpperCase() === carrier.toUpperCase()) {
          return item.states;
        } else {
          return null;
        }
      })
      .filter((item) => (!item ? false : true));

    const mergedArr = [].concat.apply([], stateArr);
    return [...new Set(mergedArr)];
  } else {
    // search by both
    const stateArr = mockData.carriers
      .map((item) => {
        const nextArr = item.insuranceTypes.filter((nextItem) => {
          return nextItem.toUpperCase() === insuranceType.toUpperCase();
        });
        if (
          nextArr.length > 0 &&
          item.id.toUpperCase() === carrier.toUpperCase()
        ) {
          return item.states;
        } else {
          return null;
        }
      })
      .filter((item) => (!item ? false : true));

    const mergedArr = [].concat.apply([], stateArr);
    return [...new Set(mergedArr)];
  }
};
