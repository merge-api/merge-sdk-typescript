/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    ListRequest,
    ListRequestFromJSON,
    ListRequestFromJSONTyped,
    ListRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface MKTGListEndpointRequest
 */
export interface MKTGListEndpointRequest {
    /**
     * 
     * @type {ListRequest}
     * @memberof MKTGListEndpointRequest
     */
    model: ListRequest;
}

export function MKTGListEndpointRequestFromJSON(json: JSONValue): MKTGListEndpointRequest | undefined {
    return MKTGListEndpointRequestFromJSONTyped(json);
}

export function MKTGListEndpointRequestFromJSONTyped(json: JSONValue): MKTGListEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': ListRequestFromJSON(json['model']) as ListRequest,
    };
}

export function MKTGListEndpointRequestToJSON(value?: MKTGListEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': ListRequestToJSON(value.model),
    };
}
