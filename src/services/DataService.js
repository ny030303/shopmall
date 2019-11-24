import axios from "axios";
import waitDialog from "./WaitDialog";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};


let heartUserData = null;

export const utoa = (str) => window.btoa(unescape(encodeURIComponent(str)));

export const atou = (str) => decodeURIComponent(escape(window.atob(str)));

export const DBItemDataToItems = (item) => {
  let colorPicks = [];
  item.colors.split(',').forEach(v => colorPicks.push({title: 'NONE', color: `#${v}`}));
  return {
    pid: item.id,
    image: item.img1,
    hoverImage: item.img2,
    title: item.title,
    salePrice: Number(item.price),
    firstPrice: Number(item.oldprice),
    heartCnt: Number(item.ulike),
    colorPick: colorPicks
  };
};

export const getLoginInfo = () => {
  let data = localStorage.getItem('loginUser');
  return (data) ? JSON.parse(data) : null;
};

export const deleteUser = (uid, callback) => {
  axios.get(`/php/deleteUser.php?id=${uid}`, config).then(res => {
    console.log('deleteUser:', res.data.result);
  });
};

export const logout = (callback) => {
  localStorage.removeItem('loginUser');
  axios.get(`/php/logout.php`, config).then(res => {
    console.log('logout:', res.data.result);
    if (callback) callback(res.data.result);
  });
};

export const getHeartUser = (uid, callback) => {
  if( heartUserData ) {
    callback(heartUserData);
  }
  axios.post(`/php/getHeartUser.php?uid=`).then(res => {
    console.log('getHeartUser:', res.data);
    heartUserData = Object.assign({}, res.data);
    if (callback) callback(heartUserData);
  });
};

export const setHeartUser = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/setHeartUser.php`, formData).then(res => {
    console.log('setHeartUser:', res.data);
    if (callback) callback(res.data);
  });
};

export const getUsers = (uid, pwd, callback) => {
  axios.get(`/php/login.php?id=${uid}&pwd=${pwd}`, config).then(res => {
    console.log('getUsers:', res.data);
    if( res.data.result ) {
      localStorage.setItem('loginUser', JSON.stringify(res.data.users));
    }
    if (callback) callback(res.data);
  });
};

export const putUsers = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/signup.php`, formData).then(res => {
    console.log('putUsers:', res.data);
    if (callback) callback(res.data);
  });
};

export const getClothesOfWomen = (type, callback) => {
  axios.get(`/php/getClothesOfWomen.php?type=${type}`, config).then(res => {
    console.log('getClothesOfWomen:', res.data);
    if (callback) callback(res.data);
  });
};

export const getBestItems = (gender, type, count, callback) => {
  axios.get(`/php/getBestItems.php?gender=${gender}&type=${type}&count=${count}`, config).then(res => {
    console.log('getBestItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const getNormalItems = (gender, type, callback) => {
  console.log("getNormalItems:", gender, type);
  axios.get(`/php/getNormalItems.php?gender=${gender}&type=${type}`, config).then(res => {
    console.log('getNormalItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const getDenimItems = (gender, type, callback) => {
  axios.get(`/php/getDenimItems.php?gender=${gender}&type=${type}`, config).then(res => {
    console.log('getDenimItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const getBagItems = (type, callback) => {
  axios.get(`/php/getBagItems.php?type=${type}`, config).then(res => {
    console.log('getBagItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const getSaleItems = (gender, type, callback) => {
  axios.get(`/php/getSaleItems.php?gender=${gender}&type=${type}`, config).then(res => {
    console.log('getSaleItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const getDetailItem = (table, id, callback) => {
  axios.get(`/php/getDetailItem.php?table=${table}&id=${id}`, config).then(res => {
    console.log('getDetailItem:', res.data);
    if (callback) callback(res.data);
  });
};

export const getOrderItems = (uid, callback) => {
  axios.post(`/php/getOrderItems.php?uid=${uid}`).then(res => {
    console.log('getOrder:', res.data);
    if (callback) callback(res.data);
  });
};

export const getHeartItems = (uid, callback) => {
  axios.post(`/php/getHeartItems.php?uid=${uid}`).then(res => {
    console.log('getHeartItems:', res.data);
    if (callback) callback(res.data);
  });
};

export const putOrderItems = (data, callback) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  axios.post(`/php/putOrderItems.php`, formData).then(res => {
    console.log('putOrder:', res.data);
    if (callback) callback(res.data);
  });
};
