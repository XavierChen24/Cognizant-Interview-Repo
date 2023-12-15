const moment = require("moment");
//TODO: move configs to a file seperately
const operatingHours = { openingHour: 12, closingHour: 20 };
const duration = { 0: 30, 1: 60, 2: 90, 3: 120 };
/**
 * /Sets the start and end time of the pod booking
 * and return an array of timings for all available timings in the day
 * @param {int} startTime //in 24h time
 * @param {int} EndTime
 */
function generateTimings(startTime, EndTime) {
  const start = new Date();
  start.setHours(startTime, 0, 0); //12 PM
  const end = new Date();
  end.setHours(EndTime, 0, 0); //8 PM

  const timingArray = [];

  while (start <= end) {
    timingArray.push(
      start.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })
    );
    start.setMinutes(start.getMinutes() + 30);
  }
  return timingArray;
}
/**
 *
 * @param {*} currentTimings Current available booking timings
 * @param {*} bookingTiming  Current booking timing set by user
 * @param {*} bookingTiming  How many 30 minutes block booked. index 0 - index 3
 */
function generateAvailableTimings(
  currentTimings, //["08:00 AM, 08:30AM...."]
  bookingTiming, //"08:30 AM"
  bookingDuration //"0"
) {
  //Fetch the hours the users are booking
  let minutesBooked = duration[bookingDuration]; //e.g. 30minutes

  //start of the booking time and calculate the end of booking time

  let startTime = parseTimeToDateObj(bookingTiming);
  let endTime = moment(startTime).add(minutesBooked, 'm').toDate();
  const timingArray = [];

  while (startTime <= endTime) {
    timingArray.push(
      startTime.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })
    );
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  const difference = currentTimings.filter((x) => !timingArray.includes(x));
  return difference;
}

function parseTimeToDateObj(timeString) {
  let date = new Date();
  let parts = timeString.match(/(\d+)\:(\d+) (\w+)/);
  let hours = /am/i.test(parts[3])
      ? parseInt(parts[1], 10)
      : parseInt(parts[1], 10) + 12,
    minutes = parseInt(parts[2], 10);

  date.setHours(hours, minutes, 0, 0);
  return date;
}

module.exports = {
  operatingHours,
  generateTimings,
  generateAvailableTimings,
  parseTimeToDateObj,
};
