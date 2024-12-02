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
import { HTTPValidationError } from '../model/hTTPValidationError';
import { HvacEfficiencyElectricDetailed } from '../model/hvacEfficiencyElectricDetailed';
import { HvacEfficiencyFossilFuels } from '../model/hvacEfficiencyFossilFuels';
import { HvacUpdateResults } from '../model/hvacUpdateResults';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum GGRFHVACUpdateApiApiKeys {
}

export class GGRFHVACUpdateApi {
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

    public setApiKey(key: GGRFHVACUpdateApiApiKeys, value: string) {
        (this.authentications as any)[GGRFHVACUpdateApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Look up the efficiency, in BTU/Wh for a given standard.  Parameters ---------- electric_efficiency     One of the standards-based measures of HVAC electrical efficiency.  Returns -------     The efficiency in BTU/wh for that standard.
     * @summary Ggrf Hvac Upgrade Btu Per Watt Hour
     * @param electricEfficiency 
     */
    public async ggrfHvacUpgradeBtuPerWattHourGgrfHvacUpgradeBtuPerWattHourV1Get (electricEfficiency: HvacEfficiencyElectricDetailed, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: number;  }> {
        const localVarPath = this.basePath + '/ggrf/hvac_upgrade/btu_per_watt_hour/v1/';
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

        // verify required parameter 'electricEfficiency' is not null or undefined
        if (electricEfficiency === null || electricEfficiency === undefined) {
            throw new Error('Required parameter electricEfficiency was null or undefined when calling ggrfHvacUpgradeBtuPerWattHourGgrfHvacUpgradeBtuPerWattHourV1Get.');
        }

        if (electricEfficiency !== undefined) {
            localVarQueryParameters['electric_efficiency'] = ObjectSerializer.serialize(electricEfficiency, "HvacEfficiencyElectricDetailed");
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
            return new Promise<{ response: http.IncomingMessage; body: number;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "number");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Calculate emissions savings for an HVAC update from and older electric technology to a newer one.  Replicate the calculation on the \'B1. HVAC update\' tab of the \'Priority_Project_2_Net-Zero Building GGRF Calculator 10.18.24.xlsx\' spreadsheet.  Parameters ---------- location_zip_code     The zip code where the upgrade is taking place. This is used to determine     how power is supplied and the emissions it generates. new_unit_efficiency_percent     The percent efficiency of the new electric HVAC unit. Value should be between     0 and 100 (not 0.0 and 1.0). existing_efficiency_btu_per_watt_hour     The efficiency of the existing unit that is being replaced. annual_hvac_usage_kwh     The annual usage of electricity by the previously existing electric HVAC equipment.  Returns -------     The old and new annual emissions of CO2e and their difference.
     * @summary Ggrf Hvac Upgrade Electric To Electric
     * @param locationZipCode 
     * @param newUnitEfficiencyPercent 
     * @param existingEfficiencyBtuPerWattHour 
     * @param annualHvacUsageKwh 
     */
    public async ggrfHvacUpgradeElectricToElectricGgrfHvacUpgradeElectricToElectricV1Get (locationZipCode: string, newUnitEfficiencyPercent: number, existingEfficiencyBtuPerWattHour: number, annualHvacUsageKwh: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: any;  }> {
        const localVarPath = this.basePath + '/ggrf/hvac_upgrade/electric-to-electric/v1/';
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

        // verify required parameter 'locationZipCode' is not null or undefined
        if (locationZipCode === null || locationZipCode === undefined) {
            throw new Error('Required parameter locationZipCode was null or undefined when calling ggrfHvacUpgradeElectricToElectricGgrfHvacUpgradeElectricToElectricV1Get.');
        }

        // verify required parameter 'newUnitEfficiencyPercent' is not null or undefined
        if (newUnitEfficiencyPercent === null || newUnitEfficiencyPercent === undefined) {
            throw new Error('Required parameter newUnitEfficiencyPercent was null or undefined when calling ggrfHvacUpgradeElectricToElectricGgrfHvacUpgradeElectricToElectricV1Get.');
        }

        // verify required parameter 'existingEfficiencyBtuPerWattHour' is not null or undefined
        if (existingEfficiencyBtuPerWattHour === null || existingEfficiencyBtuPerWattHour === undefined) {
            throw new Error('Required parameter existingEfficiencyBtuPerWattHour was null or undefined when calling ggrfHvacUpgradeElectricToElectricGgrfHvacUpgradeElectricToElectricV1Get.');
        }

        // verify required parameter 'annualHvacUsageKwh' is not null or undefined
        if (annualHvacUsageKwh === null || annualHvacUsageKwh === undefined) {
            throw new Error('Required parameter annualHvacUsageKwh was null or undefined when calling ggrfHvacUpgradeElectricToElectricGgrfHvacUpgradeElectricToElectricV1Get.');
        }

        if (locationZipCode !== undefined) {
            localVarQueryParameters['location_zip_code'] = ObjectSerializer.serialize(locationZipCode, "string");
        }

        if (newUnitEfficiencyPercent !== undefined) {
            localVarQueryParameters['new_unit_efficiency_percent'] = ObjectSerializer.serialize(newUnitEfficiencyPercent, "number");
        }

        if (existingEfficiencyBtuPerWattHour !== undefined) {
            localVarQueryParameters['existing_efficiency_btu_per_watt_hour'] = ObjectSerializer.serialize(existingEfficiencyBtuPerWattHour, "number");
        }

        if (annualHvacUsageKwh !== undefined) {
            localVarQueryParameters['annual_hvac_usage_kwh'] = ObjectSerializer.serialize(annualHvacUsageKwh, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "any");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Calculate emissions savings for an HVAC update from fossil fuel to electric.  Replicate the calculation on the \'B1. HVAC update\' tab of the \'Priority_Project_2_Net-Zero Building GGRF Calculator 10.18.24.xlsx\' spreadsheet.  The methodology taken from the spreadsheet is as follows: We start with the current fuel, efficiency, and annual usage of the current fuel. We then compute how many BTUs this corresponds to. We then go back in the other direction, assuming the same number of BTUs are used, then figure out based on the new equipment efficiency how many kWh of power is used. Now, using regionally adjusted lookup tables, we determine the amount of CO2e for the new system and the old, and take the difference.  Parameters ---------- location_zip_code     The zip code where the upgrade is taking place. This is used to determine     how power is supplied and the emissions it generates. existing_unit_efficiency_standard     The industry standard the machine being replaced is measured against. This     is used to determine the type of fuel the existing unit uses. new_unit_efficiency_percent     The percent efficiency of the new electric HVAC unit. Value should be between     0 and 100 (not 0.0 and 1.0). existing_efficiency_btu_per_watt_hour     The efficiency of the existing unit that is being replaced. existing_consumption_gallons_per_year     How much fuel the existing unit uses in gallons per year if it uses a fuel     that is measured in gallons (i.e. all fossil fuels except natural gas).     Either this value, or `existing_consumption_cubic_feet_per_year`, but not     both, should be specified. existing_consumption_cubic_feet_per_year     How much fuel the existing unit uses in cubic feet per year if it uses a fuel     that is measured in cubic feet (currently only natural gas).     Either this value, or `existing_consumption_gallons_per_year`, but not     both, should be specified.  Returns -------     The old and new annual emissions of CO2e and their difference.  Raises ------ ValueError     If an unacceptable combination of arguments are passed, for example,     `existing_unit_efficiency_standard=HvacEfficiencyFossilFuels.AFUE_GAS_FURNACE`     and `existing_consumption_gallons_per_year` is passed instead of     `existing_consumption_cubic_feet_per_year`.
     * @summary Ggrf Hvac Upgrade Fossil To Electric
     * @param locationZipCode 
     * @param existingUnitEfficiencyStandard 
     * @param newUnitEfficiencyPercent 
     * @param existingEfficiencyBtuPerWattHour 
     * @param existingConsumptionGallonsPerYear 
     * @param existingConsumptionCubicFeetPerYear 
     */
    public async ggrfHvacUpgradeFossilToElectricGgrfHvacUpgradeFossilToElectricV1Get (locationZipCode: string, existingUnitEfficiencyStandard: HvacEfficiencyFossilFuels, newUnitEfficiencyPercent: number, existingEfficiencyBtuPerWattHour: number, existingConsumptionGallonsPerYear?: number, existingConsumptionCubicFeetPerYear?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: HvacUpdateResults;  }> {
        const localVarPath = this.basePath + '/ggrf/hvac_upgrade/fossil-to-electric/v1/';
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

        // verify required parameter 'locationZipCode' is not null or undefined
        if (locationZipCode === null || locationZipCode === undefined) {
            throw new Error('Required parameter locationZipCode was null or undefined when calling ggrfHvacUpgradeFossilToElectricGgrfHvacUpgradeFossilToElectricV1Get.');
        }

        // verify required parameter 'existingUnitEfficiencyStandard' is not null or undefined
        if (existingUnitEfficiencyStandard === null || existingUnitEfficiencyStandard === undefined) {
            throw new Error('Required parameter existingUnitEfficiencyStandard was null or undefined when calling ggrfHvacUpgradeFossilToElectricGgrfHvacUpgradeFossilToElectricV1Get.');
        }

        // verify required parameter 'newUnitEfficiencyPercent' is not null or undefined
        if (newUnitEfficiencyPercent === null || newUnitEfficiencyPercent === undefined) {
            throw new Error('Required parameter newUnitEfficiencyPercent was null or undefined when calling ggrfHvacUpgradeFossilToElectricGgrfHvacUpgradeFossilToElectricV1Get.');
        }

        // verify required parameter 'existingEfficiencyBtuPerWattHour' is not null or undefined
        if (existingEfficiencyBtuPerWattHour === null || existingEfficiencyBtuPerWattHour === undefined) {
            throw new Error('Required parameter existingEfficiencyBtuPerWattHour was null or undefined when calling ggrfHvacUpgradeFossilToElectricGgrfHvacUpgradeFossilToElectricV1Get.');
        }

        if (locationZipCode !== undefined) {
            localVarQueryParameters['location_zip_code'] = ObjectSerializer.serialize(locationZipCode, "string");
        }

        if (existingUnitEfficiencyStandard !== undefined) {
            localVarQueryParameters['existing_unit_efficiency_standard'] = ObjectSerializer.serialize(existingUnitEfficiencyStandard, "HvacEfficiencyFossilFuels");
        }

        if (newUnitEfficiencyPercent !== undefined) {
            localVarQueryParameters['new_unit_efficiency_percent'] = ObjectSerializer.serialize(newUnitEfficiencyPercent, "number");
        }

        if (existingEfficiencyBtuPerWattHour !== undefined) {
            localVarQueryParameters['existing_efficiency_btu_per_watt_hour'] = ObjectSerializer.serialize(existingEfficiencyBtuPerWattHour, "number");
        }

        if (existingConsumptionGallonsPerYear !== undefined) {
            localVarQueryParameters['existing_consumption_gallons_per_year'] = ObjectSerializer.serialize(existingConsumptionGallonsPerYear, "number");
        }

        if (existingConsumptionCubicFeetPerYear !== undefined) {
            localVarQueryParameters['existing_consumption_cubic_feet_per_year'] = ObjectSerializer.serialize(existingConsumptionCubicFeetPerYear, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: HvacUpdateResults;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "HvacUpdateResults");
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
