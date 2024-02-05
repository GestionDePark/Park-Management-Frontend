const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

const deleteItem = (key) => {
    return localStorage.removeItem(key);
}

const length = localStorage.length;

export const StorageProvider = {
    getItem,
    setItem,
    deleteItem,
    length
}