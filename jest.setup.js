import '@testing-library/jest-dom';

// Mock Next.js Web APIs
global.Request = class MockRequest {
    url;
    method;
    headers;
    body;

    constructor(input, init = {}) {
        this.url = typeof input === 'string' ? input : input.url;
        this.method = init.method || 'GET';
        this.headers = new Map(Object.entries(init.headers || {}));
        this.body = init.body;
    }

    json() {
        return Promise.resolve(JSON.parse(this.body || '{}'));
    }
};

global.Response = class MockResponse {
    status;
    statusText;
    headers;
    body;

    constructor(body, init = {}) {
        this.body = body;
        this.status = init.status || 200;
        this.statusText = init.statusText || 'OK';
        this.headers = new Map(Object.entries(init.headers || {}));
    }

    json() {
        return Promise.resolve(JSON.parse(this.body || '{}'));
    }

    static json(data, init = {}) {
        return new MockResponse(JSON.stringify(data), {
            ...init,
            headers: {
                'content-type': 'application/json',
                ...init.headers,
            },
        });
    }
};

global.URL = class MockURL {
    searchParams;

    constructor(url) {
        const urlStr = typeof url === 'string' ? url : url.toString();
        const [base, query] = urlStr.split('?');
        this.searchParams = new URLSearchParams(query || '');
    }
};

// Mock next/router
jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {},
            asPath: '',
            push: jest.fn(),
            replace: jest.fn(),
        };
    },
}));

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img {...props} />;
    },
})); 