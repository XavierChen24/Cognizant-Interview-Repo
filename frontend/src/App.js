import { Routes, Route } from "react-router-dom";
import React from "react";
import BookingForm from "./pages/Booking/Booking";
import Home from "./pages/Home/Home"
import PageNotFound from "./pages/PageNotFound/PageNotFound"

const App = () => {
  return (
      <Routes>
        <Route index element={<Home/>} />
        <Route path="booking" element={<BookingForm/>}/>
        <Route path="404" element={<PageNotFound/>} />
      </Routes>
  );
};

export default App;
