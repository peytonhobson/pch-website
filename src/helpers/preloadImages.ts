const preloadImages = async (imageToPreload: string) => {
  const imagePromise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(imageToPreload);
    };
    img.src = imageToPreload;
  });

  return await Promise.all([imagePromise]);
};

export default preloadImages;
