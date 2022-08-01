/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    EmailAddress,
    EmailAddressFromJSON,
    EmailAddressFromJSONTyped,
    EmailAddressToJSON,
    PhoneNumber,
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Lead Object
 * ### Description
 * The `Lead` object is used to represent a lead in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface Lead
 */
export interface Lead {
    /**
     * 
     * @type {string}
     * @memberof Lead
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Lead
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Lead
     */
    owner?: string | null;
    /**
     * The lead's source.
     * @type {string}
     * @memberof Lead
     */
    lead_source?: string | null;
    /**
     * The lead's title.
     * @type {string}
     * @memberof Lead
     */
    title?: string | null;
    /**
     * The lead's company.
     * @type {string}
     * @memberof Lead
     */
    company?: string | null;
    /**
     * The lead's first name.
     * @type {string}
     * @memberof Lead
     */
    first_name?: string | null;
    /**
     * The lead's last name.
     * @type {string}
     * @memberof Lead
     */
    last_name?: string | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof Lead
     */
    readonly addresses?: Array<Address>;
    /**
     * 
     * @type {Array<EmailAddress>}
     * @memberof Lead
     */
    readonly email_addresses?: Array<EmailAddress>;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof Lead
     */
    readonly phone_numbers?: Array<PhoneNumber>;
    /**
     * When the third party's lead was updated.
     * @type {Date}
     * @memberof Lead
     */
    remote_updated_at?: Date | null;
    /**
     * When the third party's lead was created.
     * @type {Date}
     * @memberof Lead
     */
    remote_created_at?: Date | null;
    /**
     * When the lead was converted.
     * @type {Date}
     * @memberof Lead
     */
    converted_date?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Lead
     */
    converted_contact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Lead
     */
    converted_account?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Lead
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Lead
     */
    readonly remote_was_deleted?: boolean;
}

export function LeadFromJSON(json: JSONValue): Lead | undefined {
    return LeadFromJSONTyped(json);
}

export function LeadFromJSONTyped(json: JSONValue): Lead | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'lead_source': !exists(json, 'lead_source') ? undefined : json['lead_source'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<JSONValue>).map(AddressFromJSON)) as Array<Address>,
        'email_addresses': !exists(json, 'email_addresses') ? undefined : ((json['email_addresses'] as Array<JSONValue>).map(EmailAddressFromJSON)) as Array<EmailAddress>,
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberFromJSON)) as Array<PhoneNumber>,
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'converted_date': !exists(json, 'converted_date') ? undefined : (json['converted_date'] === null ? null : new Date(json['converted_date'])),
        'converted_contact': !exists(json, 'converted_contact') ? undefined : json['converted_contact'],
        'converted_account': !exists(json, 'converted_account') ? undefined : json['converted_account'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function LeadToJSON(value?: Lead): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'owner': value.owner,
        'lead_source': value.lead_source,
        'title': value.title,
        'company': value.company,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'converted_date': value.converted_date === undefined ? undefined : (value.converted_date === null ? null : value.converted_date.toISOString()),
        'converted_contact': value.converted_contact,
        'converted_account': value.converted_account,
    };
}

