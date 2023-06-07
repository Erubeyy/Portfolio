import {defaultColor, themeColorStorageKey} from "../constants/defaultValues.jsx";

export const getCurrentColor = () => {
    let currentColor = defaultColor;
    try {
        if (localStorage.getItem(themeColorStorageKey)) {
            currentColor = localStorage.getItem(themeColorStorageKey);
        }
    } catch (error) {
        console.log('>>>>: src/helpers/Utils.js : getCurrentColor -> error', error);
        currentColor = defaultColor;
    }
    return currentColor;
};

export const setCurrentColor = (color) => {
    try {
        localStorage.setItem(themeColorStorageKey, color);
    } catch (error) {
        console.log('>>>>: src/helpers/Utils.js : setCurrentColor -> error', error);
    }
};