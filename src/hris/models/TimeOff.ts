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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'
import {
    RemoteData,
    RemoteDataFromJSON,
    RemoteDataFromJSONTyped,
    RemoteDataToJSON,
    RequestTypeEnum,
    RequestTypeEnumFromJSON,
    RequestTypeEnumFromJSONTyped,
    RequestTypeEnumToJSON,
    TimeOffStatusEnum,
    TimeOffStatusEnumFromJSON,
    TimeOffStatusEnumFromJSONTyped,
    TimeOffStatusEnumToJSON,
    UnitsEnum,
    UnitsEnumFromJSON,
    UnitsEnumFromJSONTyped,
    UnitsEnumToJSON,
} from './';


/**
 * # The TimeOff Object
 * ### Description
 * The `TimeOff` object is used to represent a Time Off Request filed by an employee.
 * 
 * ### Usage Example
 * Fetch from the `LIST TimeOffs` endpoint and filter by `ID` to show all time off requests.
 * @export
 * @interface TimeOff
 */
export interface TimeOff {
    /**
     * 
     * @type {string}
     * @memberof TimeOff
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TimeOff
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOff
     */
    employee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOff
     */
    approver?: string | null;
    /**
     * The status of this time off request.
     * @type {TimeOffStatusEnum}
     * @memberof TimeOff
     */
    status?: TimeOffStatusEnum | null;
    /**
     * The employee note for this time off request.
     * @type {string}
     * @memberof TimeOff
     */
    employee_note?: string | null;
    /**
     * The unit of time requested.
     * @type {UnitsEnum}
     * @memberof TimeOff
     */
    units?: UnitsEnum | null;
    /**
     * The number of time off units requested.
     * @type {number}
     * @memberof TimeOff
     */
    amount?: number | null;
    /**
     * The type of time off request.
     * @type {RequestTypeEnum}
     * @memberof TimeOff
     */
    request_type?: RequestTypeEnum | null;
    /**
     * The day and time of the start of the time requested off.
     * @type {Date}
     * @memberof TimeOff
     */
    start_time?: Date | null;
    /**
     * The day and time of the end of the time requested off.
     * @type {Date}
     * @memberof TimeOff
     */
    end_time?: Date | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof TimeOff
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOff
     */
    readonly remote_was_deleted?: boolean;
}

export function TimeOffFromJSON(json: JSONValue): TimeOff {
    return TimeOffFromJSONTyped(json);
}

export function TimeOffFromJSONTyped(json: JSONValue): TimeOff {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'approver': !exists(json, 'approver') ? undefined : json['approver'],
        'status': !exists(json, 'status') ? undefined : TimeOffStatusEnumFromJSON(json['status']),
        'employee_note': !exists(json, 'employee_note') ? undefined : json['employee_note'],
        'units': !exists(json, 'units') ? undefined : UnitsEnumFromJSON(json['units']),
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'request_type': !exists(json, 'request_type') ? undefined : RequestTypeEnumFromJSON(json['request_type']),
        'start_time': !exists(json, 'start_time') ? undefined : (json['start_time'] === null ? null : new Date(json['start_time'])),
        'end_time': !exists(json, 'end_time') ? undefined : (json['end_time'] === null ? null : new Date(json['end_time'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TimeOffToJSON(value?: TimeOff | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'approver': value.approver,
        'status': TimeOffStatusEnumToJSON(value.status),
        'employee_note': value.employee_note,
        'units': UnitsEnumToJSON(value.units),
        'amount': value.amount,
        'request_type': RequestTypeEnumToJSON(value.request_type),
        'start_time': value.start_time === undefined ? undefined : (value.start_time === null ? null : value.start_time.toISOString()),
        'end_time': value.end_time === undefined ? undefined : (value.end_time === null ? null : value.end_time.toISOString()),
    };
}

