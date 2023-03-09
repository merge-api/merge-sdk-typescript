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
    JournalLineRequest,
    JournalLineRequestFromJSON,
    JournalLineRequestFromJSONTyped,
    JournalLineRequestToJSON,
    PostingStatusEnum,
    PostingStatusEnumFromJSON,
    PostingStatusEnumFromJSONTyped,
    PostingStatusEnumToJSON,
} from './';


/**
 * # The JournalEntry Object
 * ### Description
 * The `JournalEntry` object is used to get a record of all manually created entries made in a company’s general ledger. The journal line items for each journal entry should sum to zero.
 * 
 * ### Usage Example
 * Fetch from the `GET JournalEntry` endpoint and view a company's journey entry.
 * @export
 * @interface JournalEntryRequest
 */
export interface JournalEntryRequest {
    /**
     * The journal entry's transaction date.
     * @type {Date}
     * @memberof JournalEntryRequest
     */
    transaction_date?: Date | null;
    /**
     * Array of `Payment` object IDs.
     * @type {Array<string>}
     * @memberof JournalEntryRequest
     */
    payments?: Array<string> | JSONValue;
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
    /**
     * The journal entry's exchange rate.
     * @type {string}
     * @memberof JournalEntryRequest
     */
    exchange_rate?: string | null;
    /**
     * The company the journal entry belongs to.
     * @type {string}
     * @memberof JournalEntryRequest
     */
    company?: string | JSONValue | null;
    /**
     * 
     * @type {Array<JournalLineRequest>}
     * @memberof JournalEntryRequest
     */
    lines?: Array<JournalLineRequest> | JSONValue;
    /**
     * The journal's posting status.
     * @type {PostingStatusEnum}
     * @memberof JournalEntryRequest
     */
    posting_status?: PostingStatusEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof JournalEntryRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof JournalEntryRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function JournalEntryRequestFromJSON(json: JSONValue): JournalEntryRequest | undefined {
    return JournalEntryRequestFromJSONTyped(json);
}

export function JournalEntryRequestFromJSONTyped(json: JSONValue): JournalEntryRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'payments': !exists(json, 'payments') ? undefined : json['payments'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'lines': !exists(json, 'lines') ? undefined : ((json['lines'] as Array<JSONValue>).map(JournalLineRequestFromJSON)) as Array<JournalLineRequest>,
        'posting_status': !exists(json, 'posting_status') ? undefined : PostingStatusEnumFromJSON(json['posting_status']) as PostingStatusEnum,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function JournalEntryRequestToJSON(value?: JournalEntryRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'payments': value.payments,
        'memo': value.memo,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'company': value.company,
        'lines': value.lines === undefined ? undefined : ((value.lines as Array<any>).map(JournalLineRequestToJSON)),
        'posting_status': PostingStatusEnumToJSON(value.posting_status),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

