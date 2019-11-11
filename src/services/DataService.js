import axios from "axios";
import waitDialog from "./WaitDialog";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};

export const DBItemDataToItems = (item) => {
  let colorPicks = [];
  item.colors.split(',').forEach(v => colorPicks.push({title: 'NONE', color: `#${v}`}));
  return {
    image: item.img1,
    hoverImage: item.img2,
    title: item.title,
    salePrice: item.price,
    firstPrice: item.oldprice,
    heartCnt: item.ulike,
    colorPick: colorPicks
  };
};

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

export const getBestItems = (gender, type, count, callback) => {
  let result = axios.get(`/php/getBestItems.php?gender=${gender}&type=${type}&count=${count}`, config).then(res => {
    console.log('getUsers:', res.data);
    if (callback) callback(res.data);
  });
};

export const getNormalItems = (gender, type, callback) => {
  console.log("getNormalItems:", gender, type);
  let result = axios.get(`/php/getNormalItems.php?gender=${gender}&type=${type}`, config).then(res => {
    console.log('getUsers:', res.data);
    if (callback) callback(res.data);
  });
};