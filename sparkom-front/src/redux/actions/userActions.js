import userTypes from "../types/userTypes";
import axios from "axios";
import { saveUserToLocalStorage, isLogged } from "../../helpers/auth";

export const getAllUsers = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get("http://localhost:8888/api/users", config)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: "USER_ERROR",
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: userTypes.GET_USERS,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8888/api/users/create", user)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: "USER_ERROR",
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: userTypes.REGISTER,
            payload: res.data,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (user, token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:8888/api/users/${userId}`, user, config)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: "USER_ERROR",
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: userTypes.UPDATE,
            payload: res.data,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const login = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8888/api/auth/signin", user)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: "USER_ERROR",
            payload: res.data.error,
          });
        } else {
          saveUserToLocalStorage(res.data);
          dispatch({
            type: userTypes.AUTH,
            payload: res.data,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const authCheck = () => {
  return (dispatch) => {
    dispatch({
      type: userTypes.CHECK_AUTH,
      payload: isLogged() ? isLogged() : null,
    });
  };
};

export const getUser = (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get(`http://localhost:8888/api/user/${userId}`, config)
    .then((res) => {
      if (res.data.error) {
        return { error: res.data.error };
      } else {
        return { data: res.data };
      }
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .delete(`http://localhost:8888/api/users/${userId}`, config)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: "USER_ERROR",
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: userTypes.DELETE,
            payload: userId,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const subscribe = (userId, followId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .put(
      `http://localhost:8888/api/user/add/follow`,
      { userId, followId },
      config
    )
    .then((res) => {
      if (res.data.error) {
        return { error: res.data.error };
      } else {
        return { data: res.data };
      }
    })
    .catch((err) => console.log(err));
};

export const unsubscribe = (userId, followId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .put(
      `http://localhost:8888/api/user/remove/follow`,
      { userId, followId },
      config
    )
    .then((res) => {
      if (res.data.error) {
        return { error: res.data.error };
      } else {
        return { data: res.data };
      }
    })
    .catch((err) => console.log(err));
};