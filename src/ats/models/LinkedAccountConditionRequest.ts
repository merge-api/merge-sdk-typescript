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

/**
 * 
 * @export
 * @interface LinkedAccountConditionRequest
 */
export interface LinkedAccountConditionRequest {
    /**
     * The ID indicating which condition schema to use for a specific condition.
     * @type {string}
     * @memberof LinkedAccountConditionRequest
     */
    condition_schema_id: string;
    /**
     * The operator for a specific condition.
     * @type {string}
     * @memberof LinkedAccountConditionRequest
     */
    operator: string;
    /**
     * The value for a specific condition.
     * @type {any}
     * @memberof LinkedAccountConditionRequest
     */
    value: any | null;
}

export function LinkedAccountConditionRequestFromJSON(json: JSONValue): LinkedAccountConditionRequest | undefined {
    return LinkedAccountConditionRequestFromJSONTyped(json);
}

export function LinkedAccountConditionRequestFromJSONTyped(json: JSONValue): LinkedAccountConditionRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'condition_schema_id': json['condition_schema_id'],
        'operator': json['operator'],
        'value': json['value'],
    };
}

export function LinkedAccountConditionRequestToJSON(value?: LinkedAccountConditionRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'condition_schema_id': value.condition_schema_id,
        'operator': value.operator,
        'value': value.value,
    };
}

