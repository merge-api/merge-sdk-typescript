/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'
import {
    BankInfo,
    BankInfoFromJSON,
    BankInfoFromJSONTyped,
    BankInfoToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedBankInfoList
 */
export interface PaginatedBankInfoList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedBankInfoList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBankInfoList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<BankInfo>}
     * @memberof PaginatedBankInfoList
     */
    results?: Array<BankInfo>;
}

export function PaginatedBankInfoListFromJSON(json: JSONValue): PaginatedBankInfoList {
    return PaginatedBankInfoListFromJSONTyped(json);
}

export function PaginatedBankInfoListFromJSONTyped(json: JSONValue): PaginatedBankInfoList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(BankInfoFromJSON)),
    };
}

export function PaginatedBankInfoListToJSON(value?: PaginatedBankInfoList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(BankInfoToJSON)),
    };
}

