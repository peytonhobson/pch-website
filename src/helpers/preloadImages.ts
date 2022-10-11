import { computed } from "vue";

const preloadImages = (imagesToPreload: string[]) => {
  return computed(() => {
    return imagesToPreload.map((link) => {
      let image = new Image();
      image.src = link;
      return image;
    });
  });
};

export default preloadImages;
