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
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
} from './';


/**
 * # The JournalEntry Object
 * ### Description
 * The `JournalEntry` object is used to represent a company's journey entries.
 * 
 * ### Usage Example
 * Fetch from the `GET JournalEntry` endpoint and view a company's journey entry.
 * @export
 * @interface JournalEntryRequest
 */
export interface JournalEntryRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof JournalEntryRequest
     */
    remote_id?: string | null;
    /**
     * The journal entry's transaction date.
     * @type {Date}
     * @memberof JournalEntryRequest
     */
    transaction_date?: Date | null;
    /**
     * When the third party's journal entry was created.
     * @type {Date}
     * @memberof JournalEntryRequest
     */
    remote_created_at?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof JournalEntryRequest
     */
    payments?: Array<string>;
    /**
     * The journal entry's private note.
     * @type {string}
     * @memberof JournalEntryRequest
     */
    memo?: string | null;
    /**
     * The journal's currency.
     * @type {CurrencyEnum}
     * @memberof JournalEntryRequest
     */
    currency?: CurrencyEnum | null;
}

export function JournalEntryRequestFromJSON(json: JSONValue): JournalEntryRequest | undefined {
    return JournalEntryRequestFromJSONTyped(json);
}

export function JournalEntryRequestFromJSONTyped(json: JSONValue): JournalEntryRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
    };
}

export function JournalEntryRequestToJSON(value?: JournalEntryRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'payments': value.payments,
        'memo': value.memo,
        'currency': CurrencyEnumToJSON(value.currency),
    };
}
