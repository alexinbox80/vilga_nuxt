import {AxiosRequest} from './Request';

export class HttpClient extends AxiosRequest {
    public static get endpoint() {
        return {
            page: {
                get: async () => await this.testApi.get('/page/')
            }
        };
    }
}
