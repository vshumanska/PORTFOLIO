document.addEventListener('DOMContentLoaded', function() {

    const btnDarkMode = document.querySelector(".dark-mode-btn");

// Sprawdzenie, czy ciemny motyw jest ustawiony na poziomie systemowym
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active"); // Dodanie klasy aktywującej przycisk dark mode
	document.body.classList.add("dark");    // Dodanie klasy dark mode 
}

// Sprawdzenie, czy ciemny motyw jest zapisany w localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active"); // Dodanie klasy aktywującej przycisk dark mode
    document.body.classList.add("dark");    // Dodanie klasy dark mode 
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");  // Usunięcie klasy aktywującej przycisk dark mode
    document.body.classList.remove("dark");
}

// Jeśli zmieniają się ustawienia systemowe, zmieniamy temat | preferencje kolorystyczne w ustawieniach OS
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");   // Zapisanie ustawienia dark mode w localStorage
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");  // Zapisanie ustawienia light mode w localStorage
		}
    });

// Włączanie dark mode za pomocą przycisku
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");  // Przełączanie klasy aktywującej przycisk dark mode
    const isDark = document.body.classList.toggle("dark");  // Przełączanie dark mode 

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

//Kalkulator usług
document.getElementById('rate-calculator').addEventListener('submit', function(e) {
    e.preventDefault();
    const service = document.getElementById('service').value;
    const hours = document.getElementById('hours').value;
    let rate;

    switch (service) {
        case 'uxui':
            rate = 100;
            break;
        case 'frontend':
            rate = 80;
            break;
        case 'testing':
            rate = 70;
            break;
        case 'support':
            rate = 60;
            break;
        default:
            rate = 0;
    }

    const totalCost = hours * rate;
    document.getElementById('total-cost').textContent = `Całkowity koszt: ${totalCost} PLN`;
});

const questionBtn = document.getElementById('question-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

questionBtn.addEventListener('click', function() {
    popup.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('show');
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});

})


