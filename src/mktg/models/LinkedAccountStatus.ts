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

/**
 * 
 * @export
 * @interface LinkedAccountStatus
 */
export interface LinkedAccountStatus {
    /**
     * 
     * @type {string}
     * @memberof LinkedAccountStatus
     */
    linked_account_status: string;
    /**
     * 
     * @type {boolean}
     * @memberof LinkedAccountStatus
     */
    can_make_request: boolean;
}

export function LinkedAccountStatusFromJSON(json: JSONValue): LinkedAccountStatus | undefined {
    return LinkedAccountStatusFromJSONTyped(json);
}

export function LinkedAccountStatusFromJSONTyped(json: JSONValue): LinkedAccountStatus | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'linked_account_status': json['linked_account_status'],
        'can_make_request': json['can_make_request'],
    };
}

export function LinkedAccountStatusToJSON(value?: LinkedAccountStatus): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'linked_account_status': value.linked_account_status,
        'can_make_request': value.can_make_request,
    };
}

