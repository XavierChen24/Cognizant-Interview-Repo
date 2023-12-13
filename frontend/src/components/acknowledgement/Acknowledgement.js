// Acknowledgement.js

import React from 'react';

const Acknowledgement = ({ bookingDetails }) => {
  return (
    <div>
      <h1>Booking Acknowledgement</h1>
      <p>Your booking details:</p>
      <ul>
        <li>Name: {bookingDetails.name}</li>
        <li>NRIC/FIN: {bookingDetails.nric}</li>
        <li>Pod Number: {bookingDetails.podNumber}</li>
        <li>Pod Location: {bookingDetails.podLocation}</li>
        <li>Date of Booking: {bookingDetails.date.toDateString()}</li>
        <li>Timing of Booking: {bookingDetails.bookingTime}</li>
        <li>Duration of Booking: {bookingDetails.bookingDuration}</li>
      </ul>
    </div>
  );
};

export default Acknowledgement;
