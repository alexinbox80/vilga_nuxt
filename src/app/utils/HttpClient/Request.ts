import axios, {type CreateAxiosDefaults} from 'axios';
import {apiUrl, testUrl} from '~~/config/app';

export class AxiosRequest {
    public static get api() {
        return this.createInstance(apiUrl);
    }

    public static get testApi() {
        return this.createInstance(testUrl);
    }

    private static createInstance(defaultUrl: string, config: CreateAxiosDefaults = {}) {
        const instance = axios.create({baseURL: defaultUrl, ...config});
        instance.interceptors.request.use((config) => {
            return config;
        });
        instance.interceptors.response.use((response) => {
            switch (true) {
                case response.status === 404:
                    throw createError({
                        statusCode: 404,
                        statusMessage: 'Page Not Found'
                    });
                case response.status > 404:
                    throw createError({
                        statusCode: 404,
                        statusMessage: 'Internal error'
                    });
                default:
                    return response;
            }
        });
        return instance;
    }
}
