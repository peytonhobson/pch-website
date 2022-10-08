const preloadImages = async (imagesToPreload: string[]) => {
  const images = imagesToPreload.map((imageSrc: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  const returnVal = await Promise.all(images)
    .then(() => {
      console.log("Images loaded!");
      return true;
    })
    .catch(() => {
      return false;
    });

  return returnVal;
};

export default preloadImages;
