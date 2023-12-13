  /**
   * /Sets the start and end time of the pod booking and return an array of timings
   * @param {int} startTime //in 24h time
   * @param {int} EndTime
   */
  function generateTimings(startTime, EndTime) {
    const start = new Date();
    start.setHours(12, 0, 0); //12 PM
    const end = new Date();
    end.setHours(20, 0, 0); //8 PM

    const timingArray = [];

    while (start <= end) {
      timingArray.push(
        start.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
      start.setMinutes(start.getMinutes() + 30);
    }
    return timingArray;
  }

  export default generateTimings