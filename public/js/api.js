// API client pour les entités books, categories, emprunts et users

// --------- BOOKS ---------
export async function getAllBooks() {
    const res = await fetch('/api/books');
    return res.json();
}

export async function getBookById(id) {
    const res = await fetch(`/api/books/${id}`);
    return res.json();
}

export async function createBook(data) {
    const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function updateBook(id, data) {
    const res = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function deleteBook(id) {
    const res = await fetch(`/api/books/${id}`, { method: 'DELETE' });
    return res.json();
}

// --------- CATEGORIES ---------
export async function getAllCategories() {
    const res = await fetch('/api/categories');
    return res.json();
}

export async function getCategoryById(id) {
    const res = await fetch(`/api/categories/${id}`);
    return res.json();
}

export async function createCategory(data) {
    const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function updateCategory(id, data) {
    const res = await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function deleteCategory(id) {
    const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
    return res.json();
}

// --------- EMPRUNTS ---------
export async function getAllEmprunts() {
    const res = await fetch('/api/emprunts');
    return res.json();
}

export async function getEmpruntById(id) {
    const res = await fetch(`/api/emprunts/${id}`);
    return res.json();
}

export async function createEmprunt(data) {
    const res = await fetch('/api/emprunts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function updateEmprunt(id, data) {
    const res = await fetch(`/api/emprunts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function deleteEmprunt(id) {
    const res = await fetch(`/api/emprunts/${id}`, { method: 'DELETE' });
    return res.json();
}

// --------- USERS ---------
export async function getAllUsers() {
    const res = await fetch('/api/users');
    return res.json();
}

export async function getUserById(id) {
    const res = await fetch(`/api/users/${id}`);
    return res.json();
}

export async function createUser(data) {
    const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function updateUser(id, data) {
    const res = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function deleteUser(id) {
    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    return res.json();
}
