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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'
import {
    UrlTypeEnum,
    UrlTypeEnumFromJSON,
    UrlTypeEnumFromJSONTyped,
    UrlTypeEnumToJSON,
} from './';


/**
 * # The Url Object
 * ### Description
 * The `Url` object is used to represent a candidate's website.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their website urls.
 * @export
 * @interface Url
 */
export interface Url {
    /**
     * The site's url.
     * @type {string}
     * @memberof Url
     */
    value?: string | null;
    /**
     * The type of site.
     * @type {UrlTypeEnum}
     * @memberof Url
     */
    url_type?: UrlTypeEnum | null;
}

export function UrlFromJSON(json: JSONValue): Url {
    return UrlFromJSONTyped(json);
}

export function UrlFromJSONTyped(json: JSONValue): Url {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'url_type': !exists(json, 'url_type') ? undefined : UrlTypeEnumFromJSON(json['url_type']),
    };
}

export function UrlToJSON(value?: Url | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'value': value.value,
        'url_type': UrlTypeEnumToJSON(value.url_type),
    };
}

