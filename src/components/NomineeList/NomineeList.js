import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNominee, removeNominee } from "../../reducers/action";

import "./NomineeList.css";

const NomineeList = () => {
  const nomineeList = useSelector((state) => state.nominee.nomineeList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(localStorage).length > 0) {
      Object.keys(localStorage).map((movieTitle) => {
        dispatch(addNominee(movieTitle));
      });
    }
  }, []);

  const removeNomineeHandler = (movieNominee) => {
    dispatch(removeNominee(movieNominee));
    localStorage.removeItem(movieNominee);
  };

  return (
    <div className="nomineescontainer">
      <h2>Nominations</h2>
      <ul>
        {nomineeList?.map((movieNominee, i) => {
          return (
            <div key={i} className="listitem">
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
