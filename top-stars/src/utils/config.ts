// import {store} from '@redux/store';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import axios from 'axios';
import { store } from '../redux/store';
import { BASE_URL } from './helpers';

const HTTP_CLIENT = axios.create({
    baseURL: BASE_URL,
});

HTTP_CLIENT.interceptors.request.use(
    config => {
        const accessToken = store.getState().root.user.authToken;
        if (!!accessToken) {
            config.headers.common = {
                Authorization: `Bearer ${accessToken}`
            }
        }
        return config;
    },
    error => {
        Promise.reject(error.response || error.message);
    }
);

const createAppoloClient = (token: any) => {
    let actualToken = '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'
    if (token) {
        actualToken = token;
    }
    const client = new ApolloClient({

        uri: 'https://api.github.com/graphql',
        headers: { "Authorization": `bearer ${actualToken}` },
        cache: new InMemoryCache(),
    });

    return client;
}

export { HTTP_CLIENT, createAppoloClient };
