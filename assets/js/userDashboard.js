const detailSection = [
  {
    icon: "../../assets/icons/ic-person.svg",
    desc: "Fullname",
    value: "Gojo Satoru",
  },
  {
    icon: "../../assets/icons/ic-email.svg",
    desc: "Email",
    value: "gojo@gmail.com",
  },
  {
    icon: "../../assets/icons/ic-whatsapp.svg",
    desc: "Whatsapp",
    value: "+62812323232323",
  },
  {
    icon: "../../assets/icons/ic-line.svg",
    desc: "Line ID",
    value: "@gojowow",
  },
  {
    icon: "../../assets/icons/ic-github.svg",
    desc: "Github/GitLab ID",
    value: "@gojouhuy",
  },
  {
    icon: "../../assets/icons/ic-location.svg",
    desc: "Birth Place",
    value: "Denpasar",
  },
  {
    icon: "../../assets/icons/ic-person.svg",
    desc: "Birth Date",
    value: "7 December 1989",
  },
];

const descContainer = document.querySelector(".detail-container");

detailSection.forEach((detail) => {
  const detailWrap = document.createElement("div");
  detailWrap.classList.add("detail-wrap");

  const iconText = document.createElement("div");
  iconText.classList.add("icon-text");

  const img = document.createElement("img");
  img.src = detail.icon;
  img.alt = `Icon ${detail.desc}`;

  const desc = document.createElement("p");
  desc.classList.add("detail-name");
  desc.textContent = detail.desc;

  iconText.appendChild(img);
  iconText.appendChild(desc);

  const value = document.createElement("p");
  value.classList.add("detail-desc");
  value.textContent = detail.value;

  detailWrap.appendChild(iconText);
  detailWrap.appendChild(value);

  descContainer.appendChild(detailWrap);
});

// logout handler
const btnLogout = document.getElementById("btn-logout");
const btnCancelLogout = document.getElementById("btn-cancel-logout");
const btnConfirmLogout = document.getElementById("btn-confirm-logout");
const modalLogout = document.getElementById("modal-logout");

btnLogout.addEventListener("click", () => {
  modalLogout.classList.remove("hidden");
});

btnConfirmLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "./login.html";
});

btnCancelLogout.addEventListener("click", () => {
  modalLogout.classList.add("hidden");
});
