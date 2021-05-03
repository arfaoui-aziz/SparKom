import groupTypes from "../types/groupTypes";
import axios from "axios";

export const JoinGroup = (token, userId, groupId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/group/JoinGroup`, { userId, groupId }, config)
      .then((res) => {
        dispatch({
          type: groupTypes.JoinGroup,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const LeaveGroup = (token, userId, groupId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/group/LeaveGroup`, { userId, groupId }, config)
      .then((res) => {
        dispatch({
          type: groupTypes.JoinGroup,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};