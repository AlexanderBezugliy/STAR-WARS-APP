
// -------- LOCAL STORAGE ---------

export const getLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key);

        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.error('Ошибка при чтении из LocalStorage:', error);
    }

    return null; //null, если данные отсутствуют или что то не так
}

export const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Ошибка при записи в LocalStorage:', error);
    }
}

