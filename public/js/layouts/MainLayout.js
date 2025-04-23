import Header from "./Header.js";
import Footer from "./Footer.js";

export default function MainLayout(slot) {
    return `
            ${Header}
            <main class="container mx-auto px-4 py-16 flex-1">
                ${slot}
            </main>
            ${Footer}
        `;
};
