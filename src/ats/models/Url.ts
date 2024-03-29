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
    UrlTypeEnum,
    UrlTypeEnumFromJSON,
    UrlTypeEnumFromJSONTyped,
    UrlTypeEnumToJSON,
} from './';


/**
 * # The Url Object
 * ### Description
 * The `Url` object is used to represent hyperlinks associated with the parent model.
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
     * 
     * * `PERSONAL` - PERSONAL
     * * `COMPANY` - COMPANY
     * * `PORTFOLIO` - PORTFOLIO
     * * `BLOG` - BLOG
     * * `SOCIAL_MEDIA` - SOCIAL_MEDIA
     * * `OTHER` - OTHER
     * * `JOB_POSTING` - JOB_POSTING
     * @type {UrlTypeEnum}
     * @memberof Url
     */
    url_type?: UrlTypeEnum | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Url
     */
    readonly modified_at?: Date;
}

export function UrlFromJSON(json: JSONValue): Url | undefined {
    return UrlFromJSONTyped(json);
}

export function UrlFromJSONTyped(json: JSONValue): Url | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'url_type': !exists(json, 'url_type') ? undefined : UrlTypeEnumFromJSON(json['url_type']) as UrlTypeEnum,
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
    };
}

export function UrlToJSON(value?: Url): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'value': value.value,
        'url_type': UrlTypeEnumToJSON(value.url_type),
    };
}

