export const deepGet = (getFunc, defaultVal = null) => {
    try {
        const result = getFunc();
        if (result === undefined) {
            return defaultVal;
        }
        return result;
    }
    catch {
        return defaultVal;
    }
}
