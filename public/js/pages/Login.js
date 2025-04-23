export default (function Login() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-indigo-700">Connexion</h2>
        <form id="loginForm" class="space-y-4">
          <div>
            <label for="loginEmail" class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
            <input type="email" id="loginEmail" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="votre@email.com">
          </div>
          <div>
            <label for="loginPassword" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input type="password" id="loginPassword" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••">
          </div>
          <div id="loginError" class="text-red-600 text-sm hidden">Veuillez remplir tous les champs.</div>
          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition">Se connecter</button>
        </form>
      </div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('loginForm');
        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');
        const error = document.getElementById('loginError');
        if (form) {
          form.addEventListener('submit', function(e) {
            if (!email.value || !password.value) {
              e.preventDefault();
              error.classList.remove('hidden');
            } else {
              error.classList.add('hidden');
              // Ici tu pourras ajouter la logique de connexion plus tard
            }
          });
        }
      });
    </script>
  `;
})();
