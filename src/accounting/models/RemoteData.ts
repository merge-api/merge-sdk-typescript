/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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

/**
 * 
 * @export
 * @interface RemoteData
 */
export interface RemoteData {
    /**
     * 
     * @type {string}
     * @memberof RemoteData
     */
    path: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteData
     */
    data?: { [key: string]: any; };
}

export function RemoteDataFromJSON(json: JSONValue): RemoteData {
    return RemoteDataFromJSONTyped(json);
}

export function RemoteDataFromJSONTyped(json: JSONValue): RemoteData {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'path': json['path'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function RemoteDataToJSON(value?: RemoteData | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'path': value.path,
        'data': value.data,
    };
}

