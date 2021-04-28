import postTypes from "../types/postTypes";
import axios from "axios";



export const getAllTopics = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:8888/api/topics`, config)
      .then((res) => {
        dispatch({
          type: postTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addTopic = (token, userId, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:8888/api/topic/create/${userId}`, post, config)
      .then((res) => {
        dispatch({
          type: postTypes.ADD_POST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

