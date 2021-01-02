import { ADD_NOMINEE, GET_NOMINEES, REMOVE_NOMINEE } from "./types";

export const addNominee = (nominee) => ({
  type: ADD_NOMINEE,
  nominee,
});

export const getNominees = () => ({
  type: GET_NOMINEES,
});

export const removeNominee = (nominee) => ({
  type: REMOVE_NOMINEE,
  nominee,
});
