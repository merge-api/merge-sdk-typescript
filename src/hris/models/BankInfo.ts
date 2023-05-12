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
    AccountTypeEnum,
    AccountTypeEnumFromJSON,
    AccountTypeEnumFromJSONTyped,
    AccountTypeEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The BankInfo Object
 * ### Description
 * The `BankInfo` object is used to represent the Bank Account information for an Employee.
 * 
 * ### Usage Example
 * Fetch from the `LIST BankInfo` endpoint and filter by `ID` to show all bank information.
 * @export
 * @interface BankInfo
 */
export interface BankInfo {
    /**
     * 
     * @type {string}
     * @memberof BankInfo
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof BankInfo
     */
    remote_id?: string | null;
    /**
     * The employee with this bank account.
     * @type {string}
     * @memberof BankInfo
     */
    employee?: string | JSONValue | null;
    /**
     * The account number.
     * @type {string}
     * @memberof BankInfo
     */
    account_number?: string | null;
    /**
     * The routing number.
     * @type {string}
     * @memberof BankInfo
     */
    routing_number?: string | null;
    /**
     * The bank name.
     * @type {string}
     * @memberof BankInfo
     */
    bank_name?: string | null;
    /**
     * The bank account type
     * 
     * * `SAVINGS` - SAVINGS
     * * `CHECKING` - CHECKING
     * @type {AccountTypeEnum}
     * @memberof BankInfo
     */
    account_type?: AccountTypeEnum | null;
    /**
     * When the matching bank object was created in the third party system.
     * @type {Date}
     * @memberof BankInfo
     */
    remote_created_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof BankInfo
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BankInfo
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof BankInfo
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof BankInfo
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function BankInfoFromJSON(json: JSONValue): BankInfo | undefined {
    return BankInfoFromJSONTyped(json);
}

export function BankInfoFromJSONTyped(json: JSONValue): BankInfo | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee': !exists(json, 'employee') ? undefined : json['employee'],
        'account_number': !exists(json, 'account_number') ? undefined : json['account_number'],
        'routing_number': !exists(json, 'routing_number') ? undefined : json['routing_number'],
        'bank_name': !exists(json, 'bank_name') ? undefined : json['bank_name'],
        'account_type': !exists(json, 'account_type') ? undefined : AccountTypeEnumFromJSON(json['account_type']) as AccountTypeEnum,
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function BankInfoToJSON(value?: BankInfo): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee': value.employee,
        'account_number': value.account_number,
        'routing_number': value.routing_number,
        'bank_name': value.bank_name,
        'account_type': AccountTypeEnumToJSON(value.account_type),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
    };
}

