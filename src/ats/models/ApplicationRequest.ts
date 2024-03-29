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

/**
 * # The Application Object
 * ### Description
 * The Application Object is used to represent a candidate's journey through a particular Job's recruiting process. If a Candidate applies for multiple Jobs, there will be a separate Application for each Job if the third-party integration allows it.
 * 
 * ### Usage Example
 * Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications.
 * @export
 * @interface ApplicationRequest
 */
export interface ApplicationRequest {
    /**
     * The candidate applying.
     * @type {string}
     * @memberof ApplicationRequest
     */
    candidate?: string | JSONValue | null;
    /**
     * The job being applied for.
     * @type {string}
     * @memberof ApplicationRequest
     */
    job?: string | JSONValue | null;
    /**
     * When the application was submitted.
     * @type {Date}
     * @memberof ApplicationRequest
     */
    applied_at?: Date | null;
    /**
     * When the application was rejected.
     * @type {Date}
     * @memberof ApplicationRequest
     */
    rejected_at?: Date | null;
    /**
     * The application's source.
     * @type {string}
     * @memberof ApplicationRequest
     */
    source?: string | null;
    /**
     * The user credited for this application.
     * @type {string}
     * @memberof ApplicationRequest
     */
    credited_to?: string | JSONValue | null;
    /**
     * The application's current stage.
     * @type {string}
     * @memberof ApplicationRequest
     */
    current_stage?: string | JSONValue | null;
    /**
     * The application's reason for rejection.
     * @type {string}
     * @memberof ApplicationRequest
     */
    reject_reason?: string | JSONValue | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequest
     */
    remote_template_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function ApplicationRequestFromJSON(json: JSONValue): ApplicationRequest | undefined {
    return ApplicationRequestFromJSONTyped(json);
}

export function ApplicationRequestFromJSONTyped(json: JSONValue): ApplicationRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'candidate': !exists(json, 'candidate') ? undefined : json['candidate'],
        'job': !exists(json, 'job') ? undefined : json['job'],
        'applied_at': !exists(json, 'applied_at') ? undefined : (json['applied_at'] === null ? null : new Date(json['applied_at'])),
        'rejected_at': !exists(json, 'rejected_at') ? undefined : (json['rejected_at'] === null ? null : new Date(json['rejected_at'])),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'credited_to': !exists(json, 'credited_to') ? undefined : json['credited_to'],
        'current_stage': !exists(json, 'current_stage') ? undefined : json['current_stage'],
        'reject_reason': !exists(json, 'reject_reason') ? undefined : json['reject_reason'],
        'remote_template_id': !exists(json, 'remote_template_id') ? undefined : json['remote_template_id'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ApplicationRequestToJSON(value?: ApplicationRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'candidate': value.candidate,
        'job': value.job,
        'applied_at': value.applied_at === undefined ? undefined : (value.applied_at === null ? null : value.applied_at.toISOString()),
        'rejected_at': value.rejected_at === undefined ? undefined : (value.rejected_at === null ? null : value.rejected_at.toISOString()),
        'source': value.source,
        'credited_to': value.credited_to,
        'current_stage': value.current_stage,
        'reject_reason': value.reject_reason,
        'remote_template_id': value.remote_template_id,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

