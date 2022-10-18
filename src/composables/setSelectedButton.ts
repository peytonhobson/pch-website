interface Route {
  text: string;
  to: string;
}

const setSelectedButton = (list: Route[], path: string) => {
  list.forEach((item) => {
    let btn: HTMLButtonElement;

    if (path === "/") {
      btn = document.querySelector("#Home") as HTMLButtonElement;
      btn.classList.add("selected");
    }

    btn = document.querySelector(
      `#${item.text.replace(" ", "-")}`
    ) as HTMLButtonElement;

    btn.classList.remove("selected");
    if (path.match(item.text.replace(" ", "-"))) {
      btn.classList.add("selected");
    }
  });
};

export default setSelectedButton;
