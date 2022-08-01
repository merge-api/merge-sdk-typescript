/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    EmailAddressRequest,
    EmailAddressRequestFromJSON,
    EmailAddressRequestFromJSONTyped,
    EmailAddressRequestToJSON,
    PhoneNumberRequest,
    PhoneNumberRequestFromJSON,
    PhoneNumberRequestFromJSONTyped,
    PhoneNumberRequestToJSON,
    UrlRequest,
    UrlRequestFromJSON,
    UrlRequestFromJSONTyped,
    UrlRequestToJSON,
} from './';


/**
 * # The Candidate Object
 * ### Description
 * The `Candidate` object is used to represent a Candidate for various positions.
 * ### Usage Example
 * Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates.
 * @export
 * @interface CandidateRequest
 */
export interface CandidateRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof CandidateRequest
     */
    remote_id?: string | null;
    /**
     * The candidate's first name.
     * @type {string}
     * @memberof CandidateRequest
     */
    first_name?: string | null;
    /**
     * The candidate's last name.
     * @type {string}
     * @memberof CandidateRequest
     */
    last_name?: string | null;
    /**
     * The candidate's current company.
     * @type {string}
     * @memberof CandidateRequest
     */
    company?: string | null;
    /**
     * The candidate's current title.
     * @type {string}
     * @memberof CandidateRequest
     */
    title?: string | null;
    /**
     * When the third party's candidate was created.
     * @type {Date}
     * @memberof CandidateRequest
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's candidate was updated.
     * @type {Date}
     * @memberof CandidateRequest
     */
    remote_updated_at?: Date | null;
    /**
     * When the most recent candidate interaction occurred.
     * @type {Date}
     * @memberof CandidateRequest
     */
    last_interaction_at?: Date | null;
    /**
     * Whether or not the candidate is private.
     * @type {boolean}
     * @memberof CandidateRequest
     */
    is_private?: boolean | null;
    /**
     * Whether or not the candidate can be emailed.
     * @type {boolean}
     * @memberof CandidateRequest
     */
    can_email?: boolean | null;
    /**
     * The candidate's locations.
     * @type {Array<string>}
     * @memberof CandidateRequest
     */
    locations?: Array<string> | null;
    /**
     * 
     * @type {Array<PhoneNumberRequest>}
     * @memberof CandidateRequest
     */
    phone_numbers?: Array<PhoneNumberRequest>;
    /**
     * 
     * @type {Array<EmailAddressRequest>}
     * @memberof CandidateRequest
     */
    email_addresses?: Array<EmailAddressRequest>;
    /**
     * 
     * @type {Array<UrlRequest>}
     * @memberof CandidateRequest
     */
    urls?: Array<UrlRequest>;
    /**
     * Array of `Tag` names as strings.
     * @type {Array<string>}
     * @memberof CandidateRequest
     */
    tags?: Array<string>;
    /**
     * Array of `Application` object IDs.
     * @type {Array<string>}
     * @memberof CandidateRequest
     */
    applications?: Array<string>;
    /**
     * Array of `Attachment` object IDs.
     * @type {Array<string>}
     * @memberof CandidateRequest
     */
    attachments?: Array<string>;
    /**
     * Custom fields configured for a given model.
     * @type {{ [key: string]: any; }}
     * @memberof CandidateRequest
     */
    custom_fields?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof CandidateRequest
     */
    remote_template_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CandidateRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CandidateRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function CandidateRequestFromJSON(json: JSONValue): CandidateRequest | undefined {
    return CandidateRequestFromJSONTyped(json);
}

export function CandidateRequestFromJSONTyped(json: JSONValue): CandidateRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'last_interaction_at': !exists(json, 'last_interaction_at') ? undefined : (json['last_interaction_at'] === null ? null : new Date(json['last_interaction_at'])),
        'is_private': !exists(json, 'is_private') ? undefined : json['is_private'],
        'can_email': !exists(json, 'can_email') ? undefined : json['can_email'],
        'locations': !exists(json, 'locations') ? undefined : json['locations'],
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberRequestFromJSON)) as Array<PhoneNumberRequest>,
        'email_addresses': !exists(json, 'email_addresses') ? undefined : ((json['email_addresses'] as Array<JSONValue>).map(EmailAddressRequestFromJSON)) as Array<EmailAddressRequest>,
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<JSONValue>).map(UrlRequestFromJSON)) as Array<UrlRequest>,
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'applications': !exists(json, 'applications') ? undefined : json['applications'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'custom_fields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
        'remote_template_id': !exists(json, 'remote_template_id') ? undefined : json['remote_template_id'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function CandidateRequestToJSON(value?: CandidateRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'company': value.company,
        'title': value.title,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'last_interaction_at': value.last_interaction_at === undefined ? undefined : (value.last_interaction_at === null ? null : value.last_interaction_at.toISOString()),
        'is_private': value.is_private,
        'can_email': value.can_email,
        'locations': value.locations,
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(PhoneNumberRequestToJSON)),
        'email_addresses': value.email_addresses === undefined ? undefined : ((value.email_addresses as Array<any>).map(EmailAddressRequestToJSON)),
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(UrlRequestToJSON)),
        'tags': value.tags,
        'applications': value.applications,
        'attachments': value.attachments,
        'custom_fields': value.custom_fields,
        'remote_template_id': value.remote_template_id,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

