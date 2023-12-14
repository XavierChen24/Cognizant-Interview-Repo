import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import generateTimings from "./Helper";
import validator from "validator";
import axios from "../../api/axios";
import { makeReservationRoute } from "../../api/routes";
import { toast } from "react-toastify";
export default function Example() {
  //TODO: Move constants to config file
  const podNumbers = {
    "Pod 1": {
      name: "Red Room",
      value: "1",
    },
    "Pod 2": {
      name: "Green Room",
      value: "2",
    },
    "Pod 3": {
      name: "Blue Room",
      value: "3",
    },
    "Pod 4": {
      name: "Yellow Room",
      value: "4",
    },
    "Pod 5": {
      name: "Orange Room",
      value: "5",
    },
    "Pod 6": {
      name: "Purple Room",
      value: "6",
    },
    "Pod 7": {
      name: "Black Room",
      value: "7",
    },
    "Pod 8": {
      name: "White Room",
      value: "8",
    },
  };

  const openingHours = generateTimings(12, 20);

  const bookingDuration = ["30 mins", "1 hour", "1.5 hour", "2 hours"];

  const [value, setValue] = useState({
    fullName: null,
    nirc: null,
    podNumber: null,
    startDate: null,
    bookingTimings: null,
    bookingDuration: null,
  });

  const [datePickerValue, setDatePicker] = useState({
    startDate: null,
    endDate: null,
  });

  const [fullNameError, setFullNameError] = useState("");
  const [nircError, setNircError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleDatePicker = (newValue) => {
    setValue({ ...value, startDate: newValue.startDate });
    setDatePicker(newValue);
  };

  const podList = Object.keys(podNumbers);

  const handleValidation = () => {
    let formIsValid = true;

    if (
      !validator.isAlpha(value.fullName) &&
      !validator.isLength(value.fullName, { min: 5 })
    ) {
      formIsValid = false;
      setFullNameError("Fullname cannot contain numbers or special characters");
      return false;
    } else {
      setFullNameError("");
      formIsValid = true;
    }

    if (!validator.whitelist(value.nirc, "^[STFG]d{7}[A-Z]$")) {
      formIsValid = false;
      setNircError("Invalid NIRC. Use Capital Only!");
      return false;
    } else {
      setNircError("");
      formIsValid = true;
    }

    if (!validator.whitelist(value.startDate, "^\\d{4}-\\d{2}-\\d{2}$")) {
      formIsValid = false;
      setStartDateError("Invalid Start Date Format");
      return false;
    } else {
      setStartDateError("");
      formIsValid = true;
    }

    setFormValid(formIsValid);
  };

  async function bookingSubmit(e) {
    console.log(value);
    e.preventDefault();
    console.log(formValid)
    handleValidation();
    console.log(formValid)
    if (formValid) {
      try {
        //TODO: Must finish the axio function in backend and return to frontend to handle the response
        let response = await axios.post(makeReservationRoute, value);

        console.log("request sent");
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  }

  return (
    <form onSubmit={bookingSubmit} className="booking-form">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {/* Start of Page Introduction */}
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Booking Form
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Your information would be stored, and sold to every possible
                data broker you can think of.
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                You filling this form means you consent to us doing it.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Start of Input Field for Fullname*/}
              <div className="sm:col-span-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      autoComplete="fullName"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="MARY TAN XIAO HUA"
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
              {/* Start of Input Field for NIRC*/}
              <div className="sm:col-span-4">
                <label
                  htmlFor="nirc"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  NIRC/FIN
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      type="text"
                      name="nirc"
                      id="nirc"
                      autoComplete="nirc"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="SxxxxxxxxA / TxxxxxxxxA"
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
              {/* Start of Input Field for Pod Number*/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="podNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pod Number
                </label>
                <div className="mt-2">
                  <select
                    id="podNumber"
                    name="podNumber"
                    autoComplete="podNumber"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={changeHandler}
                  >
                    {podList.map((pod, key) => (
                      <option key={pod} value={pod.value}>
                        {pod}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Start of drop down for pod location */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="podLocation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pod Location
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      disabled
                      type="text"
                      name="podLocation"
                      id="podLocation"
                      autoComplete="podLocation"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      required
                      value={
                        podNumbers[
                          value.podNumber || Object.keys(podNumbers)[0]
                        ].name
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Start of Date Picker */}
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Booking Date
                </label>
                <div className="mt-2">
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <Datepicker
                      required
                      id="startDate"
                      name="startDate"
                      asSingle={true}
                      value={datePickerValue}
                      onChange={handleDatePicker}
                    />
                  </div>
                </div>
              </div>
              {/* Start of Time Picker */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="bookingTimings"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Booking Timing
                </label>
                <div className="mt-2">
                  <select
                    id="bookingTimings"
                    name="bookingTimings"
                    autoComplete="bookingTimings"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={changeHandler}
                  >
                    {openingHours.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Start of Duration Picker */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="bookingDuration"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Booking Timing
                </label>
                <div className="mt-2">
                  <select
                    id="bookingDuration"
                    name="bookingDuration"
                    autoComplete="bookingDuration"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={changeHandler}
                  >
                    {bookingDuration.map((option) => (
                      <option
                        key={option}
                        value={bookingDuration.indexOf(option)}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Start of Submit Button */}
              <div className="sm:col-span-3">
                <div className="mt-6 flex items-right gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
