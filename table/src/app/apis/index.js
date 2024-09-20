import axios from "axios";

export const getData = async (page) => {
  try {
    let res = await axios.get(
      `http://localhost:7000/api/facilities?page=${page}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getFacility = async (id) => {
  try {
    let res = await axios.get(`http://localhost:7000/api/facility?id=${id}`);
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};

export const getContract = async (id) => {
  try {
    let res = await axios.get(`http://localhost:7000/api/contract?id=${id}`);
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async (id) => {
  try {
    let res = await axios.get(`http://localhost:7000/api/userdata?id=${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (id) => {
  try {
    let res = await axios.get(`http://localhost:7000/api/user?id=${id}`);
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};
