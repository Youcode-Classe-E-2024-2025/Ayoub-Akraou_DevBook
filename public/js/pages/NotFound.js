export default (function NotFound() {
    return `<div class="flex flex-col items-center justify-center h-full py-16">
        <h1 class="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-2">Page non trouvée</h2>
        <p class="mb-6 text-gray-500">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a href="/" data-link class="text-indigo-600 hover:underline">Retour à l'accueil</a>
    </div>`;
})();
