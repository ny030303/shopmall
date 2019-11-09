import axios from "axios";
import waitDialog from "./WaitDialog";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};

export const getUsers = (uid, pwd, callback) => {
  let result = axios.get(`/php/getUser.php`, config).then(res => {
    console.log('getUsers:', res.data);
    if (callback) callback(res.data);
  });
};

export const getClothesOfWomen = (type, callback) => {
  let result = axios.get(`/php/getClothesOfWomen.php?type=${type}`, config).then(res => {
    console.log('getUsers:', res.data);
    if (callback) callback(res.data);
  });
};