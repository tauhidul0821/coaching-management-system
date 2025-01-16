export const saveToLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
};

export const getFromLocalStorage = (key: string): any | null => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error reading from localStorage:", error);
        return null;
    }
};

export const removeFromLocalStorage = (key: string) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage:", error);
    }
};

export const isBrowser = (): boolean => {
    return typeof window !== 'undefined'
  }