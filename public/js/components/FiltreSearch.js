export default (function FiltreSearch() {
  return `
    <!-- Filtres et recherche -->
        <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
                    <div class="relative">
                        <input type="text" id="search" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Titre, auteur...">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                    <select id="category" class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="">Toutes les catégories</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="csharp">C#</option>
                        <option value="php">PHP</option>
                    </select>
                </div>
                <div>
                    <label for="status" class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                    <select id="status" class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="">Tous les statuts</option>
                        <option value="reading">En cours de lecture</option>
                        <option value="completed">Terminé</option>
                        <option value="planned">À lire</option>
                        <option value="borrowed">Emprunté</option>
                    </select>
                </div>
                <div>
                    <label for="sort" class="block text-sm font-medium text-gray-700 mb-1">Trier par</label>
                    <select id="sort" class="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="title_asc">Titre (A-Z)</option>
                        <option value="title_desc">Titre (Z-A)</option>
                        <option value="author_asc">Auteur (A-Z)</option>
                        <option value="author_desc">Auteur (Z-A)</option>
                        <option value="date_added_desc">Date d'ajout (récent)</option>
                        <option value="date_added_asc">Date d'ajout (ancien)</option>
                    </select>
                </div>
            </div>
            <div class="mt-4 flex justify-end">
                <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                    <i class="fas fa-filter mr-2"></i> Appliquer les filtres
                </button>
            </div>
        </div>
    `;
})();
