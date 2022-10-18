import { computed } from "vue";

import getImgURL from "./getImgURL";

const preloadImages = (imagesToPreload: string[]) => {
  return computed(() => {
    return imagesToPreload.map((link) => {
      let image = new Image();
      image.src = getImgURL(link);
      return image;
    });
  });
};

export default preloadImages;
