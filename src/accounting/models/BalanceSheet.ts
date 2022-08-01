/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    
    ReportItem,
    ReportItemFromJSON,
    ReportItemFromJSONTyped,
    ReportItemToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The BalanceSheet Object
 * ### Description
 * The `BalanceSheet` object is used to represent a company's balance sheet.
 * 
 * ### Usage Example
 * Fetch from the `LIST BalanceSheets` endpoint and view a company's balance sheets.
 * @export
 * @interface BalanceSheet
 */
export interface BalanceSheet {
    /**
     * 
     * @type {string}
     * @memberof BalanceSheet
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof BalanceSheet
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof BalanceSheet
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The balance sheet's name.
     * @type {string}
     * @memberof BalanceSheet
     */
    name?: string | null;
    /**
     * The balance sheet's date. The balance sheet data will reflect the company's financial position this point in time.
     * @type {Date}
     * @memberof BalanceSheet
     */
    date?: Date | null;
    /**
     * The balance sheet's net assets.
     * @type {number}
     * @memberof BalanceSheet
     */
    net_assets?: number | null;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof BalanceSheet
     */
    readonly assets?: Array<ReportItem>;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof BalanceSheet
     */
    readonly liabilities?: Array<ReportItem>;
    /**
     * 
     * @type {Array<ReportItem>}
     * @memberof BalanceSheet
     */
    readonly equity?: Array<ReportItem>;
    /**
     * The time that balance sheet was generated by the accounting system.
     * @type {Date}
     * @memberof BalanceSheet
     */
    remote_generated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof BalanceSheet
     */
    readonly remote_was_deleted?: boolean;
}

export function BalanceSheetFromJSON(json: JSONValue): BalanceSheet | undefined {
    return BalanceSheetFromJSONTyped(json);
}

export function BalanceSheetFromJSONTyped(json: JSONValue): BalanceSheet | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'name': !exists(json, 'name') ? undefined : json['name'],
        'date': !exists(json, 'date') ? undefined : (json['date'] === null ? null : new Date(json['date'])),
        'net_assets': !exists(json, 'net_assets') ? undefined : json['net_assets'],
        'assets': !exists(json, 'assets') ? undefined : ((json['assets'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'liabilities': !exists(json, 'liabilities') ? undefined : ((json['liabilities'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'equity': !exists(json, 'equity') ? undefined : ((json['equity'] as Array<JSONValue>).map(ReportItemFromJSON)) as Array<ReportItem>,
        'remote_generated_at': !exists(json, 'remote_generated_at') ? undefined : (json['remote_generated_at'] === null ? null : new Date(json['remote_generated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function BalanceSheetToJSON(value?: BalanceSheet): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'date': value.date === undefined ? undefined : (value.date === null ? null : value.date.toISOString()),
        'net_assets': value.net_assets,
        'remote_generated_at': value.remote_generated_at === undefined ? undefined : (value.remote_generated_at === null ? null : value.remote_generated_at.toISOString()),
    };
}

