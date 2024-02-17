const cardsWrapperElem = document.querySelector(".cards-wrapper");

const requests = [
  {
    id: 1,
    name: "سهیل صمدی",
    title: "آپلود مستندات",
    time: "1402/11/27",
    order: "درخواست برسی تمرین",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/1.png",
  },
  {
    id: 2,
    name: "حسین رضایی",
    title: "آپلود مستندات",
    time: "1402/05/05",
    order: "درخواست عضویت",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/2.png",
  },
  {
    id: 3,
    name: "ارسلان قاسمی",
    title: "آپلود مستندات",
    time: "1402/05/06",
    order: "درخواست عضویت",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/3.png",
  },
  {
    id: 4,
    name: "علیرضا محمدی",
    title: "آپلود مستندات",
    time: "1402/05/07",
    order: "درخواست عضویت",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/4.png",
  },
  {
    id: 5,
    name: "صادق بارانی",
    title: "آپلود مستندات",
    time: "1402/05/08",
    order: "درخواست عضویت",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/5.png",
  },
  {
    id: 6,
    name: "علیرضا اکبرپور",
    title: "",
    time: "1402/05/09",
    order: "درخواست عضویت",
    number: Math.floor(Math.random() * 100000),
    img: "../src/images/6.png",
  },
];

// console.log(requests);
console.log(cardsWrapperElem);

let allCards = "";
requests.forEach((card) => {
  cardsWrapperElem.innerHTML = "";
  allCards += `<div>
    <div class="card">
      <div class="card__header d-flex">
        <div class="card__header-title">
          <span>${card.id}</span>
          <h2>${card.title}</h2>
        </div>
        <div class="card__date">${card.time}</div>
      </div>
      <div class="card__body">
        <h2 class="card__body-title">${card.order}</h2>
        <p class="card__body-discription">
          شناسه درخواست
          <span dir="ltr">${`#` + card.number}</span>
        </p>
      </div>
      <div class="card__footer">
        <div class="card__profile">
          <div class="card__profile-img">
            <img class="" src="${card.img}" alt="">
          </div>
          <h3 class="card__profile-title">${card.name}</h3>
        </div>
        <a href="#" class="btn btn--primary">مشاهده درخواست</a>
      </div>
    </div>
  </div>`;
});
cardsWrapperElem.innerHTML = allCards;
