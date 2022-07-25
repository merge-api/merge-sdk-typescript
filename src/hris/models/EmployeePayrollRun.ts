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
    Deduction,
    DeductionFromJSON,
    DeductionFromJSONTyped,
    DeductionToJSON,
    Earning,
    EarningFromJSON,
    EarningFromJSONTyped,
    EarningToJSON,
    RemoteData,
    RemoteDataFromJSON,
    RemoteDataFromJSONTyped,
    RemoteDataToJSON,
    Tax,
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './';


/**
 * # The EmployeePayrollRun Object
 * ### Description
 * The `EmployeePayrollRun` object is used to represent a payroll run for a specific employee.
 * 
 * ### Usage Example
 * Fetch from the `LIST EmployeePayrollRun` endpoint and filter by `ID` to show all employee payroll runs.
 * @export
 * @interface EmployeePayrollRun
 */
export interface EmployeePayrollRun {
    /**
     * 
     * @type {string}
     * @memberof EmployeePayrollRun
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof EmployeePayrollRun
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayrollRun
     */
    employee?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeePayrollRun
     */
    payroll_run?: string | null;
    /**
     * The gross pay from the run.
     * @type {number}
     * @memberof EmployeePayrollRun
     */
    gross_pay?: number | null;
    /**
     * The net pay from the run.
     * @type {number}
     * @memberof EmployeePayrollRun
     */
    net_pay?: number | null;
    /**
     * The day and time the payroll run started.
     * @type {Date}
     * @memberof EmployeePayrollRun
     */
    start_date?: Date | null;
    /**
     * The day and time the payroll run ended.
     * @type {Date}
     * @memberof EmployeePayrollRun
     */
    end_date?: Date | null;
    /**
     * The day and time the payroll run was checked.
     * @type {Date}
     * @memberof EmployeePayrollRun
     */
    check_date?: Date | null;
    /**
     * 
     * @type {Array<Earning>}
     * @memberof EmployeePayrollRun
     */
    readonly earnings?: Array<Earning>;
    /**
     * 
     * @type {Array<Deduction>}
     * @memberof EmployeePayrollRun
     */
    readonly deductions?: Array<Deduction>;
    /**
     * 
     * @type {Array<Tax>}
     * @memberof EmployeePayrollRun
     */
    readonly taxes?: Array<Tax>;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof EmployeePayrollRun
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof EmployeePayrollRun
     */
    readonly remote_was_deleted?: boolean;
}

export function EmployeePayrollRunFromJSON(json: JSONValue): EmployeePayrollRun {
    return EmployeePayrollRunFromJSONTyped(json);
}

export function EmployeePayrollRunFromJSONTyped(json: JSONValue): EmployeePayrollRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'payroll_run': !exists(json, 'payroll_run') ? undefined : json['payroll_run'],
        'gross_pay': !exists(json, 'gross_pay') ? undefined : json['gross_pay'],
        'net_pay': !exists(json, 'net_pay') ? undefined : json['net_pay'],
        'start_date': !exists(json, 'start_date') ? undefined : (json['start_date'] === null ? null : new Date(json['start_date'])),
        'end_date': !exists(json, 'end_date') ? undefined : (json['end_date'] === null ? null : new Date(json['end_date'])),
        'check_date': !exists(json, 'check_date') ? undefined : (json['check_date'] === null ? null : new Date(json['check_date'])),
        'earnings': !exists(json, 'earnings') ? undefined : ((json['earnings'] as Array<any>).map(EarningFromJSON)),
        'deductions': !exists(json, 'deductions') ? undefined : ((json['deductions'] as Array<any>).map(DeductionFromJSON)),
        'taxes': !exists(json, 'taxes') ? undefined : ((json['taxes'] as Array<any>).map(TaxFromJSON)),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function EmployeePayrollRunToJSON(value?: EmployeePayrollRun | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'payroll_run': value.payroll_run,
        'gross_pay': value.gross_pay,
        'net_pay': value.net_pay,
        'start_date': value.start_date === undefined ? undefined : (value.start_date === null ? null : value.start_date.toISOString()),
        'end_date': value.end_date === undefined ? undefined : (value.end_date === null ? null : value.end_date.toISOString()),
        'check_date': value.check_date === undefined ? undefined : (value.check_date === null ? null : value.check_date.toISOString()),
    };
}

