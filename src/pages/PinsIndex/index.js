import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { LocationCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";

const PinsIndex = () => {
  const pinIndex = useSelector((state) => state.pins);
  console.log(pinIndex.pins);

  // console.log(this.props);

  const renderLocation = () =>
    pinIndex.pins.map((x) => (
      <LocationCard key={x.id} id={x.pin_id} name={x.name} iconClass={x.thumb} border={x.colour} />
    ));

  return (
    <div className="min-w-screen min-h-screen gradscheme flex items-center p-20 ">
      <div id="mapBox" className="flex-1 rounded-3xl bg-white shadow-xl lg:p-20 flex items-center text-center ">




        <div class=" mx-auto">
          <h3 className="text-4xl font-semibold leading-normal text-center">
            Pins
          </h3>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 w-full h-full">
            {renderLocation()}
          </div>
        </div>






      </div>
    </div>

  );
};

export default PinsIndex;
