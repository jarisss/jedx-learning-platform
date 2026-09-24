// Feather Icons
feather.replace();


// =========================
// Navbar Hamburger
// =========================

const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (
    !hamburgerMenu.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});



const characters = [
  {
    category: "HERO",
    title: "Peter Parker",
    description:
      "Seorang remaja biasa yang mendapatkan kekuatan laba-laba dan menggunakan kemampuannya untuk membantu orang lain.",
    info: "The Friendly Neighborhood Spider-Man",
  },

  {
    category: "HERO",
    title: "Spider-Man",
    description:
      "Pahlawan bertopeng yang melindungi kota dengan kekuatan super, spider-sense, dan kemampuan menembakkan jaring.",
    info: "The Web Slinger",
  },

  {
    category: "VILLAIN",
    title: "Green Goblin",
    description:
      "Salah satu musuh Spider-Man yang menggunakan teknologi canggih, glider, dan bom sebagai senjata.",
    info: "Spider-Man's Enemy",
  },

  {
    category: "VILLAIN",
    title: "Electro",
    description:
      "Penjahat dengan kemampuan mengendalikan listrik yang menjadi salah satu lawan berbahaya bagi Spider-Man.",
    info: "Master of Electricity",
  },

  {
    category: "VILLAIN",
    title: "Mysterio",
    description:
      "Seorang ahli ilusi yang menggunakan teknologi dan efek visual untuk membingungkan lawan-lawannya.",
    info: "Master of Illusion",
  },
];


// =========================
// Menampilkan Karakter
// =========================

function displayCharacters() {
  const characterList = document.querySelector("#course-list");

  characterList.innerHTML = "";

  characters.forEach((character) => {
    characterList.innerHTML += `
      <div class="menu-card">

        <div class="menu-card-content">

          <span>${character.category}</span>

          <h3>${character.title}</h3>

          <p>${character.description}</p>

          <small>${character.info}</small>

          <strong>SPIDER-VERSE</strong>

          <a href="#about">
            Lihat Cerita
          </a>

        </div>

      </div>
    `;
  });
}


// Jalankan saat halaman dibuka
displayCharacters();