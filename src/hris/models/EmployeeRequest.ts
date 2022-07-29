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
    EmploymentStatusEnum,
    EmploymentStatusEnumFromJSON,
    EmploymentStatusEnumFromJSONTyped,
    EmploymentStatusEnumToJSON,
    EthnicityEnum,
    EthnicityEnumFromJSON,
    EthnicityEnumFromJSONTyped,
    EthnicityEnumToJSON,
    GenderEnum,
    GenderEnumFromJSON,
    GenderEnumFromJSONTyped,
    GenderEnumToJSON,
    MaritalStatusEnum,
    MaritalStatusEnumFromJSON,
    MaritalStatusEnumFromJSONTyped,
    MaritalStatusEnumToJSON,
} from './';


/**
 * # The Employee Object
 * ### Description
 * The `Employee` object is used to represent an Employee for a company.
 * 
 * ### Usage Example
 * Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
 * @export
 * @interface EmployeeRequest
 */
export interface EmployeeRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof EmployeeRequest
     */
    remote_id?: string | null;
    /**
     * The employee's number that appears in the remote UI. Note: This is distinct from the remote_id field, which is a unique identifier for the employee set by the remote API, and is not exposed to the user. This value can also change in many API providers.
     * @type {string}
     * @memberof EmployeeRequest
     */
    employee_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    company?: string | null;
    /**
     * The employee's first name.
     * @type {string}
     * @memberof EmployeeRequest
     */
    first_name?: string | null;
    /**
     * The employee's last name.
     * @type {string}
     * @memberof EmployeeRequest
     */
    last_name?: string | null;
    /**
     * The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
     * @type {string}
     * @memberof EmployeeRequest
     */
    display_full_name?: string | null;
    /**
     * The employee's username that appears in the remote UI.
     * @type {string}
     * @memberof EmployeeRequest
     */
    username?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmployeeRequest
     */
    groups?: Array<string>;
    /**
     * The employee's work email.
     * @type {string}
     * @memberof EmployeeRequest
     */
    work_email?: string | null;
    /**
     * The employee's personal email.
     * @type {string}
     * @memberof EmployeeRequest
     */
    personal_email?: string | null;
    /**
     * The employee's mobile phone number.
     * @type {string}
     * @memberof EmployeeRequest
     */
    mobile_phone_number?: string | null;
    /**
     * Array of `Employment` IDs for this Employee.
     * @type {Array<string>}
     * @memberof EmployeeRequest
     */
    employments?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    home_location?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    work_location?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    manager?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    team?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeRequest
     */
    pay_group?: string | null;
    /**
     * The employee's social security number.
     * @type {string}
     * @memberof EmployeeRequest
     */
    ssn?: string | null;
    /**
     * The employee's gender.
     * @type {GenderEnum}
     * @memberof EmployeeRequest
     */
    gender?: GenderEnum | null;
    /**
     * The employee's ethnicity.
     * @type {EthnicityEnum}
     * @memberof EmployeeRequest
     */
    ethnicity?: EthnicityEnum | null;
    /**
     * The employee's marital status.
     * @type {MaritalStatusEnum}
     * @memberof EmployeeRequest
     */
    marital_status?: MaritalStatusEnum | null;
    /**
     * The employee's date of birth.
     * @type {Date}
     * @memberof EmployeeRequest
     */
    date_of_birth?: Date | null;
    /**
     * The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
     * @type {Date}
     * @memberof EmployeeRequest
     */
    hire_date?: Date | null;
    /**
     * The date that the employee started working. If an employee has multiple start dates from previous employments, this represents the most recent start date.
     * @type {Date}
     * @memberof EmployeeRequest
     */
    start_date?: Date | null;
    /**
     * When the third party's employee was created.
     * @type {Date}
     * @memberof EmployeeRequest
     */
    remote_created_at?: Date | null;
    /**
     * The employment status of the employee.
     * @type {EmploymentStatusEnum}
     * @memberof EmployeeRequest
     */
    employment_status?: EmploymentStatusEnum | null;
    /**
     * The employee's termination date.
     * @type {Date}
     * @memberof EmployeeRequest
     */
    termination_date?: Date | null;
    /**
     * The URL of the employee's avatar image.
     * @type {string}
     * @memberof EmployeeRequest
     */
    avatar?: string | null;
    /**
     * Custom fields configured for a given model.
     * @type {{ [key: string]: any; }}
     * @memberof EmployeeRequest
     */
    custom_fields?: { [key: string]: any; } | null;
}

export function EmployeeRequestFromJSON(json: JSONValue): EmployeeRequest | undefined {
    return EmployeeRequestFromJSONTyped(json);
}

export function EmployeeRequestFromJSONTyped(json: JSONValue): EmployeeRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee_number': !exists(json, 'employee_number') ? undefined : json['employee_number'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'display_full_name': !exists(json, 'display_full_name') ? undefined : json['display_full_name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'work_email': !exists(json, 'work_email') ? undefined : json['work_email'],
        'personal_email': !exists(json, 'personal_email') ? undefined : json['personal_email'],
        'mobile_phone_number': !exists(json, 'mobile_phone_number') ? undefined : json['mobile_phone_number'],
        'employments': !exists(json, 'employments') ? undefined : json['employments'],
        'home_location': !exists(json, 'home_location') ? undefined : json['home_location'],
        'work_location': !exists(json, 'work_location') ? undefined : json['work_location'],
        'manager': !exists(json, 'manager') ? undefined : json['manager'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'pay_group': !exists(json, 'pay_group') ? undefined : json['pay_group'],
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'gender': !exists(json, 'gender') ? undefined : GenderEnumFromJSON(json['gender']) as GenderEnum,
        'ethnicity': !exists(json, 'ethnicity') ? undefined : EthnicityEnumFromJSON(json['ethnicity']) as EthnicityEnum,
        'marital_status': !exists(json, 'marital_status') ? undefined : MaritalStatusEnumFromJSON(json['marital_status']) as MaritalStatusEnum,
        'date_of_birth': !exists(json, 'date_of_birth') ? undefined : (json['date_of_birth'] === null ? null : new Date(json['date_of_birth'])),
        'hire_date': !exists(json, 'hire_date') ? undefined : (json['hire_date'] === null ? null : new Date(json['hire_date'])),
        'start_date': !exists(json, 'start_date') ? undefined : (json['start_date'] === null ? null : new Date(json['start_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'employment_status': !exists(json, 'employment_status') ? undefined : EmploymentStatusEnumFromJSON(json['employment_status']) as EmploymentStatusEnum,
        'termination_date': !exists(json, 'termination_date') ? undefined : (json['termination_date'] === null ? null : new Date(json['termination_date'])),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'custom_fields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
    };
}

export function EmployeeRequestToJSON(value?: EmployeeRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee_number': value.employee_number,
        'company': value.company,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'display_full_name': value.display_full_name,
        'username': value.username,
        'groups': value.groups,
        'work_email': value.work_email,
        'personal_email': value.personal_email,
        'mobile_phone_number': value.mobile_phone_number,
        'employments': value.employments,
        'home_location': value.home_location,
        'work_location': value.work_location,
        'manager': value.manager,
        'team': value.team,
        'pay_group': value.pay_group,
        'ssn': value.ssn,
        'gender': GenderEnumToJSON(value.gender),
        'ethnicity': EthnicityEnumToJSON(value.ethnicity),
        'marital_status': MaritalStatusEnumToJSON(value.marital_status),
        'date_of_birth': value.date_of_birth === undefined ? undefined : (value.date_of_birth === null ? null : value.date_of_birth.toISOString()),
        'hire_date': value.hire_date === undefined ? undefined : (value.hire_date === null ? null : value.hire_date.toISOString()),
        'start_date': value.start_date === undefined ? undefined : (value.start_date === null ? null : value.start_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'employment_status': EmploymentStatusEnumToJSON(value.employment_status),
        'termination_date': value.termination_date === undefined ? undefined : (value.termination_date === null ? null : value.termination_date.toISOString()),
        'avatar': value.avatar,
        'custom_fields': value.custom_fields,
    };
}
