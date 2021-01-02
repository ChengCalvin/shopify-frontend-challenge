import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNominee } from "../../reducers/action";

import "./NomineeList.css";

const NomineeList = () => {
  const nomineeList = useSelector((state) => state.nominee.nomineeList);
  const dispatch = useDispatch();

  const removeNomineeHandler = (movieNominee) => {
    dispatch(removeNominee(movieNominee));
  };

  return (
    <div className="nomineescontainer">
      <h2>Nominations</h2>
      <ul>
        {nomineeList?.map((movieNominee) => {
          return (
            <div className="listitem">
              <li>{movieNominee}</li>
              <button
                type="button"
                onClick={() => removeNomineeHandler(movieNominee)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NomineeList;
