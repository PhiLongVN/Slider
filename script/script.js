let mang = [
  {
    title:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",

    name: "Tanya Sinclair",
    job: "UX Engineer",
    img: "./images/image-tanya.jpg",
  },

  {
    title:
      "you want to lay the best foundation possible I’d recommend taking thiscourse. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",

    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img: "./images/image-john.jpg",
  },

  {
    title:
      "you want to lay the best foundation possible I’d recommend taking thiscourse.I’m now in the job of my dreams and so excited about the future.",

    name: "Jn Tarkpor",
    job: "Junior  Developer",
    img: "./images/pattern-bg.svg",
  },
];

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const title2 = document.querySelector(".title");
const img2 = document.querySelector(".pit-img");

next.addEventListener("click", plus);
prev.addEventListener("click", minus);

let dem = 0;
function plus() {
  if (dem < mang.length - 1) {
    dem++;
  } else {
    dem = 0;
  }
  handleInfo();
}
function minus() {
  if (dem > 0) {
    dem--;
  } else {
    dem = mang.length - 1;
  }
  handleInfo();
}

function handleInfo() {
  title2.innerHTML = ` <p>
          ${mang[dem].title}
        </p>
        <h4><strong> ${mang[dem].name} </strong> ${mang[dem].job}</h4>
`;
  img2.innerHTML = `
<img class="avatar" src="${mang[dem].img}" alt="" />
`;
}
handleInfo();
