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
    ScheduledInterviewRequest,
    ScheduledInterviewRequestFromJSON,
    ScheduledInterviewRequestFromJSONTyped,
    ScheduledInterviewRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface ScheduledInterviewEndpointRequest
 */
export interface ScheduledInterviewEndpointRequest {
    /**
     * 
     * @type {ScheduledInterviewRequest}
     * @memberof ScheduledInterviewEndpointRequest
     */
    model: ScheduledInterviewRequest;
    /**
     * 
     * @type {string}
     * @memberof ScheduledInterviewEndpointRequest
     */
    remote_user_id: string;
}

export function ScheduledInterviewEndpointRequestFromJSON(json: JSONValue): ScheduledInterviewEndpointRequest | undefined {
    return ScheduledInterviewEndpointRequestFromJSONTyped(json);
}

export function ScheduledInterviewEndpointRequestFromJSONTyped(json: JSONValue): ScheduledInterviewEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': ScheduledInterviewRequestFromJSON(json['model']) as ScheduledInterviewRequest,
        'remote_user_id': json['remote_user_id'],
    };
}

export function ScheduledInterviewEndpointRequestToJSON(value?: ScheduledInterviewEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': ScheduledInterviewRequestToJSON(value.model),
        'remote_user_id': value.remote_user_id,
    };
}

