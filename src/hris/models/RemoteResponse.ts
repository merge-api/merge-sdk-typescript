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

/**
 * # The RemoteResponse Object
 * ### Description
 * The `RemoteResponse` object is used to represent information returned from a third-party endpoint.
 * 
 * ### Usage Example
 * View the `RemoteResponse` returned from your `DataPassthrough`.
 * @export
 * @interface RemoteResponse
 */
export interface RemoteResponse {
    /**
     * 
     * @type {string}
     * @memberof RemoteResponse
     */
    method: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteResponse
     */
    path: string;
    /**
     * 
     * @type {number}
     * @memberof RemoteResponse
     */
    status: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteResponse
     */
    response: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteResponse
     */
    response_headers?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteResponse
     */
    headers?: { [key: string]: any; };
}

export function RemoteResponseFromJSON(json: JSONValue): RemoteResponse {
    return RemoteResponseFromJSONTyped(json);
}

export function RemoteResponseFromJSONTyped(json: JSONValue): RemoteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'method': json['method'],
        'path': json['path'],
        'status': json['status'],
        'response': json['response'],
        'response_headers': !exists(json, 'response_headers') ? undefined : json['response_headers'],
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
    };
}

export function RemoteResponseToJSON(value?: RemoteResponse | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'method': value.method,
        'path': value.path,
        'status': value.status,
        'response': value.response,
        'response_headers': value.response_headers,
        'headers': value.headers,
    };
}

