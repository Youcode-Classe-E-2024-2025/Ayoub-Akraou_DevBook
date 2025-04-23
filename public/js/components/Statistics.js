export default (function Statistics() {
  return `
    <!-- Statistiques -->
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Catégories et nombre de livres -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Livres par catégorie</h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">JavaScript</span>
                            <div class="flex items-center">
                                <div class="w-48 bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 70%"></div>
                                </div>
                                <span class="ml-2 text-sm text-gray-600">14</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">Python</span>
                            <div class="flex items-center">
                                <div class="w-48 bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-green-500 h-2.5 rounded-full" style="width: 45%"></div>
                                </div>
                                <span class="ml-2 text-sm text-gray-600">9</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">Java</span>
                            <div class="flex items-center">
                                <div class="w-48 bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-red-500 h-2.5 rounded-full" style="width: 30%"></div>
                                </div>
                                <span class="ml-2 text-sm text-gray-600">6</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">Méthodologie</span>
                            <div class="flex items-center">
                                <div class="w-48 bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-500 h-2.5 rounded-full" style="width: 25%"></div>
                                </div>
                                <span class="ml-2 text-sm text-gray-600">5</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-700">PHP</span>
                            <div class="flex items-center">
                                <div class="w-48 bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-purple-500 h-2.5 rounded-full" style="width: 15%"></div>
                                </div>
                                <span class="ml-2 text-sm text-gray-600">3</span>
                            </div>
                        </div>
                    </div>
                </div>
                
    `;
})();
