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
    EarningTypeEnum,
    EarningTypeEnumFromJSON,
    EarningTypeEnumFromJSONTyped,
    EarningTypeEnumToJSON,
} from './';


/**
 * # The Earning Object
 * ### Description
 * The `Earning` object is used to represent an earning for a given employee's payroll run. One run could include several earnings.
 * 
 * ### Usage Example
 * Fetch from the `LIST Earnings` endpoint and filter by `ID` to show all earnings.
 * @export
 * @interface Earning
 */
export interface Earning {
    /**
     * 
     * @type {string}
     * @memberof Earning
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof Earning
     */
    employee_payroll_run?: string | null;
    /**
     * The amount earned.
     * @type {number}
     * @memberof Earning
     */
    amount?: number | null;
    /**
     * The type of earning.
     * @type {EarningTypeEnum}
     * @memberof Earning
     */
    type?: EarningTypeEnum | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Earning
     */
    remote_was_deleted?: boolean;
}

export function EarningFromJSON(json: JSONValue): Earning | undefined {
    return EarningFromJSONTyped(json);
}

export function EarningFromJSONTyped(json: JSONValue): Earning | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'employee_payroll_run': !exists(json, 'employee_payroll_run') ? undefined : json['employee_payroll_run'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'type': !exists(json, 'type') ? undefined : EarningTypeEnumFromJSON(json['type']) as EarningTypeEnum,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function EarningToJSON(value?: Earning): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'employee_payroll_run': value.employee_payroll_run,
        'amount': value.amount,
        'type': EarningTypeEnumToJSON(value.type),
        'remote_was_deleted': value.remote_was_deleted,
    };
}

