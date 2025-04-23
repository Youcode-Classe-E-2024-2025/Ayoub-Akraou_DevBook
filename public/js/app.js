"use strict";
const root = document.getElementById("root");

// pages
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import NotFound from "./pages/NotFound.js";
import MainLayout from "./layouts/MainLayout.js";

// routes
const routes = {
  "/": Home,
  "/login": Login,
  "/register": Register,
  "/admin": Admin,
  "/404": NotFound
};

function display(element) {
  root.innerHTML = "";
  const page = MainLayout(routes[element in routes ? element : "/404"]);
  root.insertAdjacentHTML("beforeend", page);
}

display(window.location.pathname);

window.onpopstate = () => {
  console.log(window.location.pathname);

  display(window.location.pathname);
};

document.addEventListener("click", function (e) {
  if (e.target.tagName == "A" && e.target.getAttribute("href").startsWith("/")) {
    e.preventDefault();
    display(e.target.getAttribute("href"));
  }
});

  // Gestion du modal d'ajout de livre
        const addBookModal = document.getElementById('addBookModal');
        const openAddBookModal = document.getElementById('openAddBookModal');
        const closeAddBookModal = document.getElementById('closeAddBookModal');
        const cancelAddBook = document.getElementById('cancelAddBook');

        openAddBookModal.addEventListener('click', () => {
            addBookModal.classList.remove('hidden');
        });

        closeAddBookModal.addEventListener('click', () => {
            addBookModal.classList.add('hidden');
        });

        cancelAddBook.addEventListener('click', () => {
            addBookModal.classList.add('hidden');
        });

        // Fermer les modals en cliquant en dehors
        window.addEventListener('click', (e) => {
            if (e.target === addBookModal) {
                addBookModal.classList.add('hidden');
            }
        });