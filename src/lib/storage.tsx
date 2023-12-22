const storage = {
    set: (key: string, object: Record<string, any>) => {
        if(localStorage) return;
        (window as any).localStorage[key] = (typeof object as string === 'string') ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if (!localStorage) return;

        if (!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);;
        } catch (e) {
            return localStorage[key];
        }
    },

    remove: (key: string) => {
        if (!localStorage) return;

        if (!localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

export default storage;