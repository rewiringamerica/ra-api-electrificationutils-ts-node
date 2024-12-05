/**
 * smallmodelsapi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GroupBy } from '../model/groupBy';
import { HTTPValidationError } from '../model/hTTPValidationError';
import { Metrics } from '../model/metrics';
import { UpgradeOption } from '../model/upgradeOption';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum HealthImpactsApiApiKeys {
}

export class HealthImpactsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: HealthImpactsApiApiKeys, value: string) {
        (this.authentications as any)[HealthImpactsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Query and aggregate results of Rewiring America\'s health impacts modeling data.  This endpoint allows users to filter data by county, state, and upgrade options. It aggregates data based on specified pollutant and health-related metrics and provides the option to group results by user-defined columns.  Parameters ---------- county_fips : List[str], optional     A list of county FIPS codes to filter the data by. Defaults to an empty list.     Example: [\'001\', \'075\'].  state : List[str], optional     A list of states to filter the data by. Defaults to an empty list.     Example: [\'CA\', \'TX\'].  upgrade : List[str], required     A list of upgrade options to filter the data by. Defaults to an empty list.     Example: [\'Medium Efficiency Heat Pump\', \'Heat Pump Dryer\'].  metrics : List[str], required     A list of pollutant or economic valuation metrics to aggregate in the query.     This field is required.     Example: [\'nh3_kg_delta\', \'premature_mortality_incidence_delta\'].  groupby : List[str], optional     A list of columns to group the query results by. Defaults to an empty list.     Example: [\'in_sqft_bin\', \'acs_housing_type\'].  Returns ------- dict     A dictionary containing the aggregated health data, with results filtered and grouped     based on the provided parameters.
     * @summary Query Health Impacts
     * @param metrics A list of pollutant emissions metrics or economic valuations to aggregate.
     * @param upgrade A list of upgrades to filter by.
     * @param countyFips A list of three-digit county FIPS codes to filter by.
     * @param state A list of state abbreviations to filter by.
     * @param groupby A list of columns to group by.
     */
    public async queryHealthImpacts (metrics: Array<Metrics>, upgrade: Array<UpgradeOption>, countyFips?: Array<string>, state?: Array<string>, groupby?: Array<GroupBy>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: object;  }> {
        const localVarPath = this.basePath + '/api/v1/health_impacts/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'metrics' is not null or undefined
        if (metrics === null || metrics === undefined) {
            throw new Error('Required parameter metrics was null or undefined when calling queryHealthImpacts.');
        }

        // verify required parameter 'upgrade' is not null or undefined
        if (upgrade === null || upgrade === undefined) {
            throw new Error('Required parameter upgrade was null or undefined when calling queryHealthImpacts.');
        }

        if (metrics !== undefined) {
            localVarQueryParameters['metrics'] = ObjectSerializer.serialize(metrics, "Array<Metrics>");
        }

        if (upgrade !== undefined) {
            localVarQueryParameters['upgrade'] = ObjectSerializer.serialize(upgrade, "Array<UpgradeOption>");
        }

        if (countyFips !== undefined) {
            localVarQueryParameters['county_fips'] = ObjectSerializer.serialize(countyFips, "Array<string>");
        }

        if (state !== undefined) {
            localVarQueryParameters['state'] = ObjectSerializer.serialize(state, "Array<string>");
        }

        if (groupby !== undefined) {
            localVarQueryParameters['groupby'] = ObjectSerializer.serialize(groupby, "Array<GroupBy>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: object;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "object");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}