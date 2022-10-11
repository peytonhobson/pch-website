import { computed } from "vue";

const preloadImage = (imageToPreload: string) => {
  return computed(() => {
    let image = new Image();
    image.src = imageToPreload;
    return image;
  });
};

export default preloadImage;
