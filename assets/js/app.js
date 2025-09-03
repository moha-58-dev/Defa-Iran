// تغییر تم
const themeToggle = document.getElementById("themeToggle");
const setTheme = (mode) => {
  document.body.setAttribute("data-bs-theme", mode);
  localStorage.setItem("theme", mode);
};
setTheme(localStorage.getItem("theme") || "light");
themeToggle.addEventListener("click", () => {
  const next = document.body.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  setTheme(next);
});

// رندر کارت‌ها
const cardsContainer = document.getElementById("cardsContainer");
function renderCards() {
  cardsContainer.innerHTML = DATA.map(item => `
    <div class="col-md-4" data-aos="fade-up">
      <div class="card card-hover h-100">
        <img src="${item.cover}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text small text-body-secondary">${item.summary}</p>
          <span class="badge bg-secondary">${item.year}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// سال فوتر
document.getElementById("year").textContent = new Date().getFullYear();

// اجرا
AOS.init({ once: true });
renderCards();
