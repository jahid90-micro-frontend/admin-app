const responseInterceptor = (res) => {
    return Promise.resolve(res)
        .then((res) => {
            if (!res.ok) {
                console.error('[Error]', res.error);
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            console.debug('[Success]', data);
            return data;
        })
        .catch((err) => {
            console.error('[Error]', err);
            throw new Error('Failed: ' + err.message);
        });
};

export const createClient = ({ serviceUri }) => {
    const fetchLayouts = () => {
        return fetch(serviceUri)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(responseInterceptor);
    };

    const addLayout = ({ layout }) => {
        console.log('add layout: ' + layout);

        return fetch(serviceUri, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ layout }),
        }).then(responseInterceptor);
    };

    const fetchPages = () => {
        return fetch(serviceUri).then(responseInterceptor);
    };

    return {
        fetchLayouts,
        addLayout,
        fetchPages,
    };
};
