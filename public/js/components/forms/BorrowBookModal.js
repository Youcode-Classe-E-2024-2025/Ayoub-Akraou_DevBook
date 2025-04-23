export default (function BorrowBookModal() {
  return `<!-- Modal d'emprunt de livre -->
    <div id="borrowBookModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div class="flex justify-between items-center border-b px-6 py-4">
                <h3 class="text-lg font-semibold text-gray-800">Emprunter un livre</h3>
                <button id="closeBorrowBookModal" class="text-gray-400 hover:text-gray-500">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form class="px-6 py-4">
                <div class="space-y-4">
                    <div>
                        <label for="borrower" class="block text-sm font-medium text-gray-700 mb-1">Nom de l'emprunteur</label>
                        <input type="text" id="borrower" name="borrower" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                    </div>
                    <div>
                        <label for="borrowDate" class="block text-sm font-medium text-gray-700 mb-1">Date d'emprunt</label>
                        <input type="date" id="borrowDate" name="borrowDate" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                    </div>
                    <div>
                        <label for="returnDate" class="block text-sm font-medium text-gray-700 mb-1">Date de retour prévue</label>
                        <input type="date" id="returnDate" name="returnDate" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                    </div>
                    <div>
                        <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <textarea id="notes" name="notes" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                    <button type="button" id="cancelBorrow" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Annuler
                    </button>
                    <button type="submit" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">
                        Confirmer l'emprunt
                    </button>
                </div>
            </form>
        </div>
    </div>`;
})();
