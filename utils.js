const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, year, id) => {
  const wrapperEl = c("div");
  const titleEl = c("h3");
  const yearEl = c("p");
  const imgEl = c("img");
  const idEl = c("p");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  yearEl.className = "year";
  imgEl.className = "img-s";
  idEl.className = "id-el";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  yearEl.textContent = year;
  idEl.textContent = id;

  wrapperEl.append(imgEl, titleEl, yearEl,idEl);
  parent.appendChild(wrapperEl);
};

export {c, createCard, q };
