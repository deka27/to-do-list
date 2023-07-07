// Function to get the current date
exports.getDate = function () {
     const today = new Date();
   
     // Options for formatting the date
     const options = {
       weekday: "long", // Full weekday name (e.g., Monday)
       day: "numeric", // Day of the month (e.g., 1)
       month: "long", // Full month name (e.g., January)
     };
   
     // Formatting the date using the options and returning it as a string
     return today.toLocaleDateString("en-US", options);
   };
   
   // Function to get the current day of the week
   exports.getDay = function () {
     const today = new Date();
   
     // Options for formatting the day of the week
     const options = {
       weekday: "long", // Full weekday name (e.g., Monday)
     };
   
     // Formatting the day of the week using the options and returning it as a string
     return today.toLocaleDateString("en-US", options);
   };
   