export function loadImage(imagesObject: any) {
  Object.keys(imagesObject).map((key) => {
    const img = new Image();
    img.src = imagesObject[key];
  });
}
