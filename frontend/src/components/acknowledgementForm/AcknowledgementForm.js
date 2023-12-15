import React from "react";

const AcknowledgementForm = ({ reservation }) => {
  return (
    <div>
      <h1>Booking Acknowledgement</h1>
      <p>Your booking details:</p>
      <ul>
        <li>Duration of Booking: {reservation.bookingDuration}</li>
        <li>Timing of Booking: {reservation.bookingTime}</li>
        <li>Name: {reservation.fullName}</li>
        <li>NRIC/FIN: {reservation.nric}</li>
        <li>Pod Number: {reservation.podNumber}</li>
        <li>Date of Booking: {reservation.date.toDateString()}</li>
      </ul>
    </div>
  );
};

export default AcknowledgementForm;
