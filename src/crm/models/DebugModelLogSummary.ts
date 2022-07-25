/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
 * @interface DebugModelLogSummary
 */
export interface DebugModelLogSummary {
    /**
     * 
     * @type {string}
     * @memberof DebugModelLogSummary
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof DebugModelLogSummary
     */
    method: string;
    /**
     * 
     * @type {number}
     * @memberof DebugModelLogSummary
     */
    status_code: number;
}

export function DebugModelLogSummaryFromJSON(json: JSONValue): DebugModelLogSummary {
    return DebugModelLogSummaryFromJSONTyped(json);
}

export function DebugModelLogSummaryFromJSONTyped(json: JSONValue): DebugModelLogSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'url': json['url'],
        'method': json['method'],
        'status_code': json['status_code'],
    };
}

export function DebugModelLogSummaryToJSON(value?: DebugModelLogSummary | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'url': value.url,
        'method': value.method,
        'status_code': value.status_code,
    };
}

