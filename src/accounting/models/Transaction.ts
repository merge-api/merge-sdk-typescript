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
import {
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
    RemoteData,
    RemoteDataFromJSON,
    RemoteDataFromJSONTyped,
    RemoteDataToJSON,
    TransactionLineItem,
    TransactionLineItemFromJSON,
    TransactionLineItemFromJSONTyped,
    TransactionLineItemToJSON,
} from './';


/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    readonly id?: string;
    /**
     * The type of general transaction.
     * @type {string}
     * @memberof Transaction
     */
    transaction_type?: string | null;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Transaction
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Transaction
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The transaction number.
     * @type {string}
     * @memberof Transaction
     */
    number?: string | null;
    /**
     * The transaction date.
     * @type {Date}
     * @memberof Transaction
     */
    transaction_date?: Date | null;
    /**
     * The transaction's account.
     * @type {string}
     * @memberof Transaction
     */
    account?: string | null;
    /**
     * The transaction's contact.
     * @type {string}
     * @memberof Transaction
     */
    contact?: string | null;
    /**
     * The transaction's total amount.
     * @type {string}
     * @memberof Transaction
     */
    total_amount?: string | null;
    /**
     * The transaction's currency.
     * @type {CurrencyEnum}
     * @memberof Transaction
     */
    currency?: CurrencyEnum | null;
    /**
     * 
     * @type {Array<TransactionLineItem>}
     * @memberof Transaction
     */
    readonly line_items?: Array<TransactionLineItem>;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly remote_was_deleted?: boolean;
}

export function TransactionFromJSON(json: JSONValue): Transaction {
    return TransactionFromJSONTyped(json);
}

export function TransactionFromJSONTyped(json: JSONValue): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'transaction_type': !exists(json, 'transaction_type') ? undefined : json['transaction_type'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'account': !exists(json, 'account') ? undefined : json['account'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']),
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<any>).map(TransactionLineItemFromJSON)),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TransactionToJSON(value?: Transaction | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'transaction_type': value.transaction_type,
        'remote_id': value.remote_id,
        'number': value.number,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'account': value.account,
        'contact': value.contact,
        'total_amount': value.total_amount,
        'currency': CurrencyEnumToJSON(value.currency),
    };
}

