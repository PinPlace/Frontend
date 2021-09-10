import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import { LocationCard, AddButton } from "../../components";
import { useSelector, connect } from "react-redux";
import { ListIndex } from "..";

const List = (props) => {
  let name = props.match.params.id;

  const listIndex = useSelector((state) => state.list);
  // console.log(listIndex.result);
  // console.log(listIndex.result[name - 1]);

  let list1 = listIndex.result[name - 1].list_pins;
  let listTitle = listIndex.result[name - 1].name;

  // console.log(list1);

  const pins = useSelector((state) => state.pins);

  console.log(pins.pins);

  let pinsList = list1.map((p) => pins.pins.filter((pin) => pin.pin_id === p));

  console.log(pinsList);

  const renderLocation = () =>
    pinsList.map((x) => (
      <LocationCard key={x[0].id} id={x[0].pin_id} name={x[0].name} iconClass={x[0].thumb} border={x[0].colour} />
    ));

  return (

    <div className="min-w-screen min-h-screen gradscheme flex items-center p-20 ">
      <div id="mapBox" className="flex-1 rounded-3xl bg-white shadow-xl lg:p-20 flex items-center text-center ">




        <div class=" mx-auto">
          <div className="flex flex-row justify-between"><h3 className="text-4xl font-semibold leading-normal text-center">
            {listTitle}
          </h3>



          </div>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 w-full h-full">


            {renderLocation()}


          </div>
        </div>






      </div>
    </div>

  );
};

export default withRouter(List);
