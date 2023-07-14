/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    PatchedCandidateRequest,
    PatchedCandidateRequestFromJSON,
    PatchedCandidateRequestFromJSONTyped,
    PatchedCandidateRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface PatchedCandidateEndpointRequest
 */
export interface PatchedCandidateEndpointRequest {
    /**
     * 
     * @type {PatchedCandidateRequest}
     * @memberof PatchedCandidateEndpointRequest
     */
    model: PatchedCandidateRequest;
    /**
     * 
     * @type {string}
     * @memberof PatchedCandidateEndpointRequest
     */
    remote_user_id: string;
}

export function PatchedCandidateEndpointRequestFromJSON(json: JSONValue): PatchedCandidateEndpointRequest | undefined {
    return PatchedCandidateEndpointRequestFromJSONTyped(json);
}

export function PatchedCandidateEndpointRequestFromJSONTyped(json: JSONValue): PatchedCandidateEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': PatchedCandidateRequestFromJSON(json['model']) as PatchedCandidateRequest,
        'remote_user_id': json['remote_user_id'],
    };
}

export function PatchedCandidateEndpointRequestToJSON(value?: PatchedCandidateEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': PatchedCandidateRequestToJSON(value.model),
        'remote_user_id': value.remote_user_id,
    };
}
