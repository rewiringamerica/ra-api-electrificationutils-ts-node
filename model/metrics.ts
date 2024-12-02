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
* Enum for valid pollutant or health-related metrics.
*/
export enum Metrics {
    Pm25PriKgDelta = <any> 'pm25-pri_kg_delta',
    Nh3KgDelta = <any> 'nh3_kg_delta',
    NoxKgDelta = <any> 'nox_kg_delta',
    VocKgDelta = <any> 'voc_kg_delta',
    So2KgDelta = <any> 'so2_kg_delta',
    PrematureMortalityIncidenceDelta = <any> 'premature_mortality_incidence_delta',
    PrematureMortalityValuationDollarsDelta = <any> 'premature_mortality_valuation_dollars_delta'
}