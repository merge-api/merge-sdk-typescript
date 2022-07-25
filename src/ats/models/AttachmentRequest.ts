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
    AttachmentTypeEnum,
    AttachmentTypeEnumFromJSON,
    AttachmentTypeEnumFromJSONTyped,
    AttachmentTypeEnumToJSON,
} from './';


/**
 * # The Attachment Object
 * ### Description
 * The `Attachment` object is used to represent a attachment for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company.
 * @export
 * @interface AttachmentRequest
 */
export interface AttachmentRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof AttachmentRequest
     */
    remote_id?: string | null;
    /**
     * The attachment's name.
     * @type {string}
     * @memberof AttachmentRequest
     */
    file_name?: string | null;
    /**
     * The attachment's url.
     * @type {string}
     * @memberof AttachmentRequest
     */
    file_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttachmentRequest
     */
    candidate?: string | null;
    /**
     * The attachment's type.
     * @type {AttachmentTypeEnum}
     * @memberof AttachmentRequest
     */
    attachment_type?: AttachmentTypeEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function AttachmentRequestFromJSON(json: JSONValue): AttachmentRequest {
    return AttachmentRequestFromJSONTyped(json);
}

export function AttachmentRequestFromJSONTyped(json: JSONValue): AttachmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'file_name': !exists(json, 'file_name') ? undefined : json['file_name'],
        'file_url': !exists(json, 'file_url') ? undefined : json['file_url'],
        'candidate': !exists(json, 'candidate') ? undefined : json['candidate'],
        'attachment_type': !exists(json, 'attachment_type') ? undefined : AttachmentTypeEnumFromJSON(json['attachment_type']),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function AttachmentRequestToJSON(value?: AttachmentRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'file_name': value.file_name,
        'file_url': value.file_url,
        'candidate': value.candidate,
        'attachment_type': AttachmentTypeEnumToJSON(value.attachment_type),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

