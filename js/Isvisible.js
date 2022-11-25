// Track user is visible the element
// รูปเราเอง
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
// transition เขียวๆ
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
// กล่อง ยินดีต้อนรับสู่เรื่องราวของผม
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
// ก้อนเมฆหน้า welcome
const cloud = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cloud");
    } else {
      entry.target.classList.remove("cloud");
      console.log("not visible");
    }
  });
});
const cloud3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cloud3");
    } else {
      entry.target.classList.remove("cloud3");
      console.log("not visible");
    }
  });
});
const cloud4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cloud4");
    } else {
      entry.target.classList.remove("cloud4");
      console.log("not visible");
    }
  });
});
const diary_box_1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move_diary-box-1");
    } else {
      entry.target.classList.remove("move_diary-box-1");
      console.log("not visible");
    }
  });
});
const diary_box_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move_diary-box-2");
    } else {
      entry.target.classList.remove("move_diary-box-2");
      console.log("not visible");
    }
  });
});
const diary_box_3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move_diary-box-3");
    } else {
      entry.target.classList.remove("move_diary-box-3");
      console.log("not visible");
    }
  });
});
const diary_box_4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move_diary-box-4");
    } else {
      entry.target.classList.remove("move_diary-box-4");
      console.log("not visible");
    }
  });
});
const diary_box_5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move_diary-box-5");
    } else {
      entry.target.classList.remove("move_diary-box-5");
      console.log("not visible");
    }
  });
});
const special_thanks = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("special-thank");
    } else {
      entry.target.classList.remove("special-thank");
      console.log("not visible");
    }
  });
});
const boy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("boy_jump");
    } else {
      entry.target.classList.remove("boy_jump");
      console.log("not visible");
    }
  });
});
// อยากให้ track element ไหน
boy.observe(document.querySelector('#boy-jump'));
cloud4.observe(document.querySelector("#cloud4"));
cloud3.observe(document.querySelector("#cloud3"));
cloud.observe(document.querySelector("#cloud"));
observable.observe(document.querySelector("#avatar > img "));
bush.observe(document.querySelector("#bush"));
box_message_1.observe(document.querySelector("#greeting2"));
girl.observe(document.querySelector("#girl-image"));
diary_box_1.observe(document.querySelector(".diary-box-1"));
diary_box_2.observe(document.querySelector(".diary-box-2"));
diary_box_3.observe(document.querySelector(".diary-box-3"));
diary_box_4.observe(document.querySelector(".diary-box-4"));
diary_box_5.observe(document.querySelector(".diary-box-5"));
special_thanks.observe(document.querySelector("#special-thank"));