"use client";

import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2025-11-28");

const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-200"
      date={endingDate}
    />
  );
};

export default CountDown;
