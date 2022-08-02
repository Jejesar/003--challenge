const notes = document.querySelectorAll(".note");

const getActive = () => {
  let active;
  try {
    active = Array.from(notes).filter((n) => n.classList.contains("active"))[0]
      .innerHTML;
    localStorage.setItem("active", active);
  } catch (error) {
    active = undefined;
  }
  return active;
};

const disableAll = () => {
  notes.forEach((note) => {
    if (note.classList.contains("active")) note.classList.remove("active");
  });
};

const activeOne = (note) => {
  note.classList.add("active");
};

notes.forEach((note) => {
  note.addEventListener("click", (e) => {
    disableAll();
    activeOne(e.target);
  });
});

const button = document.querySelector(".submit");

button.addEventListener("click", (e) => {
  if (getActive() !== undefined) {
    getActive();
    window.location.href = "/submited.html";
  } else {
    button.classList.add("error");
    setTimeout(() => {
      button.classList.remove("error");
    }, 800);
  }
});
