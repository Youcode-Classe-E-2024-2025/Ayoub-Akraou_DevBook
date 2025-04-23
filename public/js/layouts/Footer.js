export default (function Footer() {
  return ` <footer class="mt-12 border-t border-gray-200">
        <div class="container mx-auto px-4 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center mb-4 md:mb-0">
                    <i class="fas fa-book-open text-indigo-600 text-xl mr-2"></i>
                    <span class="text-gray-600 font-medium">DevBook</span>
                </div>
                <div class="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" class="text-gray-500 hover:text-indigo-600">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-indigo-600">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-indigo-600">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div class="text-sm text-gray-500">
                    &copy; 2023 DevBook. Tous droits réservés.
                </div>
            </div>
        </div>
    </footer>`;
})()
