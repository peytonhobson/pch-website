const getImgURL = (imgURL: string) => {
  return require("@/assets/" + imgURL);
};

export default getImgURL;
