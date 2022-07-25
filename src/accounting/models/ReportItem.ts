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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'

/**
 * # The ReportItem Object
 * ### Description
 * The `ReportItem` object is used to represent a report item for a Balance Sheet, Cash Flow Statement or Profit and Loss Report.
 * 
 * ### Usage Example
 * Fetch from the `GET BalanceSheet` endpoint and view the balance sheet's report items.
 * @export
 * @interface ReportItem
 */
export interface ReportItem {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof ReportItem
     */
    remote_id?: string | null;
    /**
     * The report item's name.
     * @type {string}
     * @memberof ReportItem
     */
    name?: string | null;
    /**
     * The report item's value.
     * @type {number}
     * @memberof ReportItem
     */
    value?: number | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ReportItem
     */
    readonly sub_items?: { [key: string]: any; };
}

export function ReportItemFromJSON(json: JSONValue): ReportItem {
    return ReportItemFromJSONTyped(json);
}

export function ReportItemFromJSONTyped(json: JSONValue): ReportItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'sub_items': !exists(json, 'sub_items') ? undefined : json['sub_items'],
    };
}

export function ReportItemToJSON(value?: ReportItem | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'value': value.value,
    };
}

