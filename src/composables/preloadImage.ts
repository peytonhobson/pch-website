export function preloadImage(imageUrl: string) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // Consider resolving on error to avoid blocking
    img.src = imageUrl;
  });
}
