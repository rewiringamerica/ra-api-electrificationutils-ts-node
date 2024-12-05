export * from './gGRFHVACUpdateApi';
import { GGRFHVACUpdateApi } from './gGRFHVACUpdateApi';
export * from './healthImpactsApi';
import { HealthImpactsApi } from './healthImpactsApi';
export * from './rangeUpgradeApi';
import { RangeUpgradeApi } from './rangeUpgradeApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [GGRFHVACUpdateApi, HealthImpactsApi, RangeUpgradeApi];
