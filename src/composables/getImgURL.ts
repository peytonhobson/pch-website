const getImgURL = (imgURL: string) => {
  if (imgURL) {
    return require("@/assets/" + imgURL);
  } else {
    return undefined;
  }
};

export default getImgURL;
