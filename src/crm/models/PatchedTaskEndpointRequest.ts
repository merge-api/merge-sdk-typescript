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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    PatchedTaskRequest,
    PatchedTaskRequestFromJSON,
    PatchedTaskRequestFromJSONTyped,
    PatchedTaskRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface PatchedTaskEndpointRequest
 */
export interface PatchedTaskEndpointRequest {
    /**
     * 
     * @type {PatchedTaskRequest}
     * @memberof PatchedTaskEndpointRequest
     */
    model: PatchedTaskRequest;
}

export function PatchedTaskEndpointRequestFromJSON(json: JSONValue): PatchedTaskEndpointRequest | undefined {
    return PatchedTaskEndpointRequestFromJSONTyped(json);
}

export function PatchedTaskEndpointRequestFromJSONTyped(json: JSONValue): PatchedTaskEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': PatchedTaskRequestFromJSON(json['model']) as PatchedTaskRequest,
    };
}

export function PatchedTaskEndpointRequestToJSON(value?: PatchedTaskEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': PatchedTaskRequestToJSON(value.model),
    };
}

