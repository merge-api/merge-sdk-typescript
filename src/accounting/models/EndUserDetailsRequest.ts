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
    CategoriesEnum,
    CategoriesEnumFromJSON,
    CategoriesEnumFromJSONTyped,
    CategoriesEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface EndUserDetailsRequest
 */
export interface EndUserDetailsRequest {
    /**
     * 
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_email_address: string;
    /**
     * 
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_organization_name: string;
    /**
     * 
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    end_user_origin_id: string;
    /**
     * 
     * @type {Array<CategoriesEnum>}
     * @memberof EndUserDetailsRequest
     */
    categories: Array<CategoriesEnum>;
    /**
     * The slug of a specific pre-selected integration for this linking flow token, for examples of slugs see https://www.merge.dev/docs/basics/integration-metadata
     * @type {string}
     * @memberof EndUserDetailsRequest
     */
    integration?: string | null;
    /**
     * An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30
     * @type {number}
     * @memberof EndUserDetailsRequest
     */
    link_expiry_mins?: number;
    /**
     * Whether to generate a Magic Link URL. Defaults to false
     * @type {boolean}
     * @memberof EndUserDetailsRequest
     */
    should_create_magic_link_url?: boolean;
}

export function EndUserDetailsRequestFromJSON(json: JSONValue): EndUserDetailsRequest {
    return EndUserDetailsRequestFromJSONTyped(json);
}

export function EndUserDetailsRequestFromJSONTyped(json: JSONValue): EndUserDetailsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'end_user_email_address': json['end_user_email_address'],
        'end_user_organization_name': json['end_user_organization_name'],
        'end_user_origin_id': json['end_user_origin_id'],
        'categories': ((json['categories'] as Array<any>).map(CategoriesEnumFromJSON)),
        'integration': !exists(json, 'integration') ? undefined : json['integration'],
        'link_expiry_mins': !exists(json, 'link_expiry_mins') ? undefined : json['link_expiry_mins'],
        'should_create_magic_link_url': !exists(json, 'should_create_magic_link_url') ? undefined : json['should_create_magic_link_url'],
    };
}

export function EndUserDetailsRequestToJSON(value?: EndUserDetailsRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'end_user_email_address': value.end_user_email_address,
        'end_user_organization_name': value.end_user_organization_name,
        'end_user_origin_id': value.end_user_origin_id,
        'categories': ((value.categories as Array<any>).map(CategoriesEnumToJSON)),
        'integration': value.integration,
        'link_expiry_mins': value.link_expiry_mins,
        'should_create_magic_link_url': value.should_create_magic_link_url,
    };
}

