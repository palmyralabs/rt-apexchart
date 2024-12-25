const extend = (target, ...sources) => {
    let output = { ...target };
    sources.forEach((source) => {
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = extend(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
    });
    return output;
};
const isObject = (item) => {
    return item && typeof item === "object" && !Array.isArray(item);
};

export {extend};