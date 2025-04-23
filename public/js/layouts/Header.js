export default (function Header() {
    return `<header class="bg-indigo-700 text-white shadow-md">
        <div class="container mx-auto px-4 py-6">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-book-open text-2xl"></i>
                    <h1 class="text-2xl font-bold">DevBook</h1>
                </div>
                <div class="flex space-x-4">
                    <a href="/" class="hover:text-indigo-200">Accueil</a>
                    <a href="/books" class="hover:text-indigo-200">Mes Livres</a>
                    <a href="/categories" class="hover:text-indigo-200">Catégories</a>
                    <a href="/admin" class="hover:text-indigo-200">Dashboard</a>
                </div>
                <button class="bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-md">
                    <a href="/login"><i class="fas fa-sign-in-alt mr-1"></i> Login</a>
                </button>
                <!-- <div class="flex items-center space-x-2">
                    <button class="bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-md">
                        <i class="fas fa-sign-out-alt mr-1"></i> Déconnexion
                    </button>
                </div> -->
            </div>
        </div>
    </header>`;
})()