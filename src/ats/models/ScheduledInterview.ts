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
    RemoteData,
    RemoteDataFromJSON,
    RemoteDataFromJSONTyped,
    RemoteDataToJSON,
    ScheduledInterviewStatusEnum,
    ScheduledInterviewStatusEnumFromJSON,
    ScheduledInterviewStatusEnumFromJSONTyped,
    ScheduledInterviewStatusEnumToJSON,
} from './';


/**
 * # The ScheduledInterview Object
 * ### Description
 * The `ScheduledInterview` object is used to represent an interview.
 * ### Usage Example
 * Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations.
 * @export
 * @interface ScheduledInterview
 */
export interface ScheduledInterview {
    /**
     * 
     * @type {string}
     * @memberof ScheduledInterview
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof ScheduledInterview
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledInterview
     */
    application?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledInterview
     */
    job_interview_stage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledInterview
     */
    organizer?: string | null;
    /**
     * Array of `RemoteUser` IDs.
     * @type {Array<string>}
     * @memberof ScheduledInterview
     */
    interviewers?: Array<string>;
    /**
     * The interview's location.
     * @type {string}
     * @memberof ScheduledInterview
     */
    location?: string | null;
    /**
     * When the interview was started.
     * @type {Date}
     * @memberof ScheduledInterview
     */
    start_at?: Date | null;
    /**
     * When the interview was ended.
     * @type {Date}
     * @memberof ScheduledInterview
     */
    end_at?: Date | null;
    /**
     * When the third party's interview was created.
     * @type {Date}
     * @memberof ScheduledInterview
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's interview was updated.
     * @type {Date}
     * @memberof ScheduledInterview
     */
    remote_updated_at?: Date | null;
    /**
     * The interview's status.
     * @type {ScheduledInterviewStatusEnum}
     * @memberof ScheduledInterview
     */
    status?: ScheduledInterviewStatusEnum | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof ScheduledInterview
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof ScheduledInterview
     */
    readonly remote_was_deleted?: boolean;
}

export function ScheduledInterviewFromJSON(json: JSONValue): ScheduledInterview {
    return ScheduledInterviewFromJSONTyped(json);
}

export function ScheduledInterviewFromJSONTyped(json: JSONValue): ScheduledInterview {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'job_interview_stage': !exists(json, 'job_interview_stage') ? undefined : json['job_interview_stage'],
        'organizer': !exists(json, 'organizer') ? undefined : json['organizer'],
        'interviewers': !exists(json, 'interviewers') ? undefined : json['interviewers'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'start_at': !exists(json, 'start_at') ? undefined : (json['start_at'] === null ? null : new Date(json['start_at'])),
        'end_at': !exists(json, 'end_at') ? undefined : (json['end_at'] === null ? null : new Date(json['end_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'status': !exists(json, 'status') ? undefined : ScheduledInterviewStatusEnumFromJSON(json['status']),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<any>).map(RemoteDataFromJSON)),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function ScheduledInterviewToJSON(value?: ScheduledInterview | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'application': value.application,
        'job_interview_stage': value.job_interview_stage,
        'organizer': value.organizer,
        'interviewers': value.interviewers,
        'location': value.location,
        'start_at': value.start_at === undefined ? undefined : (value.start_at === null ? null : value.start_at.toISOString()),
        'end_at': value.end_at === undefined ? undefined : (value.end_at === null ? null : value.end_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'status': ScheduledInterviewStatusEnumToJSON(value.status),
    };
}

