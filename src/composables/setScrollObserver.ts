const setScrollObserver = () => {
  // Get all the elements you want to show on scroll
  const targets = document.querySelectorAll(".show-on-scroll");

  // Callback for IntersectionObserver
  const callback = function (entries: any[]) {
    entries.forEach((entry) => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        // Add the fadeIn class:
        entry.target.classList.add("motion-safe:animate-fadeIn");
      } 
    });
  };

  // Set up a new observer
  const observer = new IntersectionObserver(callback);

  // Loop through each of the target
  targets.forEach(function (target) {
    // Hide the element
    target.classList.add("opacity-0");

    // Add the element to the watcher
    observer.observe(target);
  });
};

export default setScrollObserver;
