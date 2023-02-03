//make card

import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

//create a card component using storybook
export const Card = ({ deleteAction, ...props }) => {
  //   const dispatch = useDispatch();
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm  hover:border-gray-400  ">
      <div className="text-left">
        <div className="flex">
          <p className="text-sm font-medium text-gray-900">{props.name}</p>
          {/* make trash icon smaller */}
          <button
            className="h-5 w-5 text-gray-400 ml-auto hover:text-red-500"
            // onClick={() => {
            //   dispatch(deleteAction(props.email));
            // }}
          >
            <TrashIcon />
          </button>
        </div>

        <p className="text-sm text-gray-500 truncate">{props.email}</p>
      </div>

      <div className="flex justify-between gap-3">
        <p className="text-sm text-gray-500 truncate">{props.college}</p>
        <p className="text-sm text-gray-500 truncate">{props.major}</p>
      </div>
    </div>
  );
};
