/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
 * # The RemoteKey Object
 * ### Description
 * The `RemoteKey` object is used to represent a request for a new remote key.
 * 
 * ### Usage Example
 * Post a `GenerateRemoteKey` to receive a new `RemoteKey`.
 * @export
 * @interface RemoteKey
 */
export interface RemoteKey {
    /**
     * 
     * @type {string}
     * @memberof RemoteKey
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteKey
     */
    key: string;
}

export function RemoteKeyFromJSON(json: JSONValue): RemoteKey {
    return RemoteKeyFromJSONTyped(json);
}

export function RemoteKeyFromJSONTyped(json: JSONValue): RemoteKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'name': json['name'],
        'key': json['key'],
    };
}

export function RemoteKeyToJSON(value?: RemoteKey | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'name': value.name,
        'key': value.key,
    };
}

