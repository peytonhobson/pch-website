const setScrollObserver = (entryFunction: Function, exitFunction: Function) => {
  // Get all the elements you want to show on scroll
  const targets = document.querySelectorAll(".slideshow");

  console.log(targets);

  // Callback for IntersectionObserver
  const callback = function (entries: any[]) {
    entries.forEach((entry) => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        // Add the fadeIn class:
        entryFunction();
      } else {
        // Otherwise remove the fadein class
        exitFunction();
      }
    });
  };

  // Set up a new observer
  const observer = new IntersectionObserver(callback);

  // Loop through each of the target
  targets.forEach(function (target) {
    // Add the element to the watcher
    console.log("observe");
    observer.observe(target);
  });
};

export default setScrollObserver;
