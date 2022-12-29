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
    EmploymentTypeEnum,
    EmploymentTypeEnumFromJSON,
    EmploymentTypeEnumFromJSONTyped,
    EmploymentTypeEnumToJSON,
    FlsaStatusEnum,
    FlsaStatusEnumFromJSON,
    FlsaStatusEnumFromJSONTyped,
    FlsaStatusEnumToJSON,
    PayCurrencyEnum,
    PayCurrencyEnumFromJSON,
    PayCurrencyEnumFromJSONTyped,
    PayCurrencyEnumToJSON,
    PayFrequencyEnum,
    PayFrequencyEnumFromJSON,
    PayFrequencyEnumFromJSONTyped,
    PayFrequencyEnumToJSON,
    PayPeriodEnum,
    PayPeriodEnumFromJSON,
    PayPeriodEnumFromJSONTyped,
    PayPeriodEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Employment Object
 * ### Description
 * The `Employment` object is used to represent an employment position at a company. These are associated with the employee filling the role.
 * 
 * Please note: Employment objects are constructed if the object does not exist in the remote system.
 * 
 * ### Usage Example
 * Fetch from the `LIST Employments` endpoint and filter by `ID` to show all employees.
 * @export
 * @interface Employment
 */
export interface Employment {
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Employment
     */
    remote_id?: string | null;
    /**
     * The employee holding this position.
     * @type {string}
     * @memberof Employment
     */
    employee?: string | JSONValue | null;
    /**
     * The position's title.
     * @type {string}
     * @memberof Employment
     */
    job_title?: string | null;
    /**
     * The position's pay rate in dollars.
     * @type {number}
     * @memberof Employment
     */
    pay_rate?: number | null;
    /**
     * The time period this pay rate encompasses.
     * @type {PayPeriodEnum}
     * @memberof Employment
     */
    pay_period?: PayPeriodEnum | null;
    /**
     * The position's pay frequency.
     * @type {PayFrequencyEnum}
     * @memberof Employment
     */
    pay_frequency?: PayFrequencyEnum | null;
    /**
     * The position's currency code.
     * @type {PayCurrencyEnum}
     * @memberof Employment
     */
    pay_currency?: PayCurrencyEnum | null;
    /**
     * The employment's pay group
     * @type {string}
     * @memberof Employment
     */
    pay_group?: string | JSONValue | null;
    /**
     * The position's FLSA status.
     * @type {FlsaStatusEnum}
     * @memberof Employment
     */
    flsa_status?: FlsaStatusEnum | null;
    /**
     * The position's effective date.
     * @type {Date}
     * @memberof Employment
     */
    effective_date?: Date | null;
    /**
     * The position's type of employment.
     * @type {EmploymentTypeEnum}
     * @memberof Employment
     */
    employment_type?: EmploymentTypeEnum | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Employment
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Employment
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Employment
     */
    readonly field_mappings?: { [key: string]: any; } | null;
}

export function EmploymentFromJSON(json: JSONValue): Employment | undefined {
    return EmploymentFromJSONTyped(json);
}

export function EmploymentFromJSONTyped(json: JSONValue): Employment | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'job_title': !exists(json, 'job_title') ? undefined : json['job_title'],
        'pay_rate': !exists(json, 'pay_rate') ? undefined : json['pay_rate'],
        'pay_period': !exists(json, 'pay_period') ? undefined : PayPeriodEnumFromJSON(json['pay_period']) as PayPeriodEnum,
        'pay_frequency': !exists(json, 'pay_frequency') ? undefined : PayFrequencyEnumFromJSON(json['pay_frequency']) as PayFrequencyEnum,
        'pay_currency': !exists(json, 'pay_currency') ? undefined : PayCurrencyEnumFromJSON(json['pay_currency']) as PayCurrencyEnum,
        'pay_group': !exists(json, 'pay_group') ? undefined : json['pay_group'],
        'flsa_status': !exists(json, 'flsa_status') ? undefined : FlsaStatusEnumFromJSON(json['flsa_status']) as FlsaStatusEnum,
        'effective_date': !exists(json, 'effective_date') ? undefined : (json['effective_date'] === null ? null : new Date(json['effective_date'])),
        'employment_type': !exists(json, 'employment_type') ? undefined : EmploymentTypeEnumFromJSON(json['employment_type']) as EmploymentTypeEnum,
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
    };
}

export function EmploymentToJSON(value?: Employment): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'job_title': value.job_title,
        'pay_rate': value.pay_rate,
        'pay_period': PayPeriodEnumToJSON(value.pay_period),
        'pay_frequency': PayFrequencyEnumToJSON(value.pay_frequency),
        'pay_currency': PayCurrencyEnumToJSON(value.pay_currency),
        'pay_group': value.pay_group,
        'flsa_status': FlsaStatusEnumToJSON(value.flsa_status),
        'effective_date': value.effective_date === undefined ? undefined : (value.effective_date === null ? null : value.effective_date.toISOString()),
        'employment_type': EmploymentTypeEnumToJSON(value.employment_type),
    };
}

