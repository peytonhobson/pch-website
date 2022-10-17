const handleNavScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  if (scrollTop > 10) {
    return false;
  } else {
    return true;
  }
};

export default handleNavScroll;
