import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import BookingForm from "./pages/Booking/Booking";
import Acknowledgement from "./pages/Acknowledgement/Acknowledgement";
import Home from "./pages/Home/Home"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import Reservation from "./pages/Reservation/Reservation";

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmission = (details) => {
    // Handle submission logic (e.g., send data to server)
    // For now, just set the details to state
    setBookingDetails(details);
  };

  return (
      <Routes>
        <Route index element={<Home/>} />
        <Route path="acknowledgement" element={<Acknowledgement/>}/>
        <Route path="booking" element={<BookingForm/>}/>
        <Route path="reservation" element={<Reservation/>}/>
        <Route path="404" element={<PageNotFound/>} />
      </Routes>
  );
};

export default App;
