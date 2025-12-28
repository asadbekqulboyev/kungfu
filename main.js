const select = document.querySelector(".select");
const selectTop = select.querySelector(".select_top");
const selectText = select.querySelector("span");
const options = select.querySelectorAll(".select_option");
const titleText = document.querySelector(".title");
const descText = document.querySelector(".desc");

const translations = {
  ru: {
    title: "Сайт находится <br> на реконструкции",
    desc:
      "Государственное регистрационное свидетельство № 1087799010540 <br>" +
      "член Европейской и Международной федераций Кунг-фу с 2009 г",
  },
  en: {
    title: "The website is <br> under reconstruction",
    desc:
      "State registration certificate No. 1087799010540 <br>" +
      "Member of the European and International Kung Fu Federations since 2009",
  },
};
function applyLanguage(lang) {
  if (!translations[lang]) return;

  selectText.textContent = lang;
  titleText.innerHTML = translations[lang].title;
  descText.innerHTML = translations[lang].desc;

  localStorage.setItem("site_lang", lang);
}
const savedLang = localStorage.getItem("site_lang") || "ru";
applyLanguage(savedLang);
selectTop.addEventListener("click", () => {
  select.classList.toggle("active");
});
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();

    const lang = option.textContent.toLowerCase();
    applyLanguage(lang);
    select.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("active");
  }
});
