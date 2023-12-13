import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import generateTimings from "./Helper";
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

  const bookingDuration = ["30 mins", "1 hour", "1.5 hour", "2 hours"];

  const [value, setValue] = useState({
    fullName: null,
    nirc: null,
    podNumber: null,
    podLocation: null,
    startDate: null,
    bookingTimings: null,
    bookingDuration: null,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  const handleDatePicker = (newValue) => {
    setValue({ ...value, startDate: newValue.startDate });
    console.log(value);
  };

  const podList = Object.keys(podNumbers);

  const openingHours = generateTimings(12, 20);

  return (
    <form>
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
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      autoComplete="fullname"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="MARY TAN XIAO HUA"
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
                      <option key={key} value={pod.value}>
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
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                      id="startDate"
                      name="startDate"
                      asSingle={true}
                      value={value}
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
