import AddBookModal from "../components/forms/AddBookModal.js";
import BorrowBookModal from "../components/forms/BorrowBookModal.js";
import FiltreSearch from "../components/FiltreSearch.js";
import BooksList from "../components/BooksList.js";
import Statistics from "../components/Statistics.js";

export default (function Home() {
    return `<!-- Contenu principal -->
    <main class="container mx-auto px-4 py-8">
        <!-- Titre et bouton d'ajout -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Ma bibliothèque</h2>
            <button id="openAddBookModal" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center">
                <i class="fas fa-plus mr-2"></i> Ajouter un livre
            </button>
        </div>

        ${FiltreSearch}
        ${BooksList}
        ${Statistics}
            <!-- Statut de lecture -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Statut de lecture</h3>
                <div class="flex justify-center">
                    <div class="w-64 h-64 relative">
                        <!-- Cercle pour représenter un graphique en camembert -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-full h-full rounded-full overflow-hidden">
                                <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-green-500 origin-bottom-right transform rotate-0"></div>
                                <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 origin-bottom-left transform rotate-0"></div>
                                <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500 origin-top-left transform rotate-0"></div>
                                <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-500 origin-top-right transform rotate-0"></div>
                            </div>
                            <div class="absolute w-32 h-32 bg-white rounded-full flex items-center justify-center">
                                <span class="text-xl font-semibold text-gray-800">37</span>
                                <span class="text-sm text-gray-600 ml-1">livres</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-2">
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-700">Terminé (15)</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-700">En cours (8)</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-700">À lire (10)</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span class="text-sm text-gray-700">Emprunté (4)</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    ${AddBookModal}
    ${BorrowBookModal}

    `;
})();