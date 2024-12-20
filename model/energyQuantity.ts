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

import { RequestFile } from './models';

/**
* A specific amount of a particular type of energy.  This is a model object that gets exposed via OpenAPI.
*/
export class EnergyQuantity {
    'energyType': string;
    'quantity': number;
    'units': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "energyType",
            "baseName": "energy_type",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EnergyQuantity.attributeTypeMap;
    }
}

