const getCollatzConjectureOutput = async (inputVal) => {
    let resultSeries = [];
    let totalSteps = 0;
    let evenSteps = 0;
    let oddSteps = 0;
    let inputValCopy = Number(inputVal);

      while (inputVal != 1) {
        totalSteps++;
        if (inputVal % 2 == 0) {
          evenSteps++;
          inputVal = inputVal / 2;
          resultSeries.push(inputVal);
        } else if (inputVal % 2 != 0) {
          oddSteps++;
          inputVal = inputVal * 3 + 1;
          resultSeries.push(inputVal);
        }
      }
  
      return {
        error: false,
        message: "success",
        inputValue:inputValCopy,
        resultSeries,
        totalSteps,
        oddSteps,
        evenSteps,
      };
}

module.exports = {
    getCollatzConjectureOutput
}