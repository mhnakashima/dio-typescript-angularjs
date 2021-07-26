import { IHttpService } from 'angular';
import { COINSTORAGE, ENDPOINT_API } from '../config/variables';

export class ApiRequestService {

    constructor(private $http: IHttpService) { }

    async getData(perPage: number, page: number): Promise<any> {
        const result = await this.$http({
            method: 'GET',
            url: `${ENDPOINT_API}&per_page=${perPage}&=page${page}`
        });
        return await result;
    }

    setCoinStorage(value) {
        window.localStorage.setItem(COINSTORAGE, JSON.stringify(value));
    }

    getCoinStorage() {
        return JSON.parse(window.localStorage.getItem(COINSTORAGE));
    }
}

