// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double a fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple a fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select drivers based on the passed function
  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }
  
  // Example usage
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']
  