import axios from "axios";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};

export const DBItemDataToItems = (item) => {
  let colorPicks = [];
  item.colors.split(',').forEach(v => colorPicks.push({title: 'NONE', color: `#${v}`}));
  return {
    dataId: Number(item.id),
    image: item.img1,
    hoverImage: item.img2,
    title: item.title,
    salePrice: Number(item.price),
    firstPrice: Number(item.oldprice),
    heartCnt: Number(item.ulike),
    colorPick: colorPicks
  };
};

export const getUsers = (uid, pwd, callback) => {
  axios.get(`/php/getUser.php`, config).then(res => {
    console.log('getUsers:', res.data);
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
    console.log('getDetailData:', res.data);
    if (callback) callback(res.data);
  });
};

