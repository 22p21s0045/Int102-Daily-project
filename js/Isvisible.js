const observable = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("avatar-img");

      console.log("visible");
    } else {
      entry.target.classList.remove("avatar-img");
      console.log("not visible");
    }
  });
});
const bush = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bush");
    } else {
      entry.target.classList.remove("bush");
      console.log("not visible");
    }
  });
});
const box_message_1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("box-message-1");
    } else {
      entry.target.classList.remove("box-message-1");
      console.log("not visible");
    }
  });
});
const girl = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("girl");
    } else {
      entry.target.classList.remove("girl");
      console.log("not visible");
    }
  });
});
observable.observe(document.querySelector("#avatar > img "));
bush.observe(document.querySelector("#bush"));
box_message_1.observe(document.querySelector("#greeting2"));
girl.observe(document.querySelector("#girl-image"));