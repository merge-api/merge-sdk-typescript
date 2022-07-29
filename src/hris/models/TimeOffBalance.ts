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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    PolicyTypeEnum,
    PolicyTypeEnumFromJSON,
    PolicyTypeEnumFromJSONTyped,
    PolicyTypeEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The TimeOffBalance Object
 * ### Description
 * The `TimeOffBalance` object is used to represent a Time Off Balance for an employee.
 * 
 * ### Usage Example
 * Fetch from the `LIST TimeOffBalances` endpoint and filter by `ID` to show all time off balances.
 * @export
 * @interface TimeOffBalance
 */
export interface TimeOffBalance {
    /**
     * 
     * @type {string}
     * @memberof TimeOffBalance
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TimeOffBalance
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffBalance
     */
    employee?: string | null;
    /**
     * The current remaining PTO balance in terms of hours. This does not represent the starting PTO balance. If the API provider only provides PTO balance in terms of days, we estimate 8 hours per day.
     * @type {number}
     * @memberof TimeOffBalance
     */
    balance?: number | null;
    /**
     * The amount of PTO used in terms of hours.
     * @type {number}
     * @memberof TimeOffBalance
     */
    used?: number | null;
    /**
     * The policy type of this time off balance.
     * @type {PolicyTypeEnum}
     * @memberof TimeOffBalance
     */
    policy_type?: PolicyTypeEnum | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof TimeOffBalance
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof TimeOffBalance
     */
    readonly remote_was_deleted?: boolean;
}

export function TimeOffBalanceFromJSON(json: JSONValue): TimeOffBalance | undefined {
    return TimeOffBalanceFromJSONTyped(json);
}

export function TimeOffBalanceFromJSONTyped(json: JSONValue): TimeOffBalance | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'used': !exists(json, 'used') ? undefined : json['used'],
        'policy_type': !exists(json, 'policy_type') ? undefined : PolicyTypeEnumFromJSON(json['policy_type']) as PolicyTypeEnum,
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TimeOffBalanceToJSON(value?: TimeOffBalance): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'balance': value.balance,
        'used': value.used,
        'policy_type': PolicyTypeEnumToJSON(value.policy_type),
    };
}
