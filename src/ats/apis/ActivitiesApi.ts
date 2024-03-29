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


import * as runtime from '../../runtime';
import {
    Activity,
    ActivityFromJSON,
    ActivityToJSON,
    ActivityEndpointRequest,
    ActivityEndpointRequestFromJSON,
    ActivityEndpointRequestToJSON,
    ActivityResponse,
    ActivityResponseFromJSON,
    ActivityResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface ActivitiesCreateRequest {
    activityEndpointRequest: ActivityEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ActivitiesListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<ActivitiesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: ActivitiesListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: ActivitiesListShowEnumOriginsEnum;
    userId?: string;
}

// extends MergeMetaRequest
export interface ActivitiesRetrieveRequest {
    id: string;
    expand?: Array<ActivitiesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: ActivitiesRetrieveRemoteFieldsEnum;
    showEnumOrigins?: ActivitiesRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class ActivitiesApi extends runtime.BaseAPI {

    /**
     * Creates an `Activity` object with the given values.
     */
    async activitiesCreateRaw(requestParameters: ActivitiesCreateRequest): Promise<runtime.ApiResponse<ActivityResponse | undefined>> {
        if (requestParameters.activityEndpointRequest === null || requestParameters.activityEndpointRequest === undefined) {
            throw new runtime.RequiredError('activityEndpointRequest','Required parameter requestParameters.activityEndpointRequest was null or undefined when calling activitiesCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/activities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ActivityEndpointRequestToJSON(requestParameters.activityEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivityResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Activity` object with the given values.
     */
    async activitiesCreate(requestParameters: ActivitiesCreateRequest): Promise<ActivityResponse | undefined> {
        const response = await this.activitiesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Activity` objects.
     */
    async activitiesListRaw(requestParameters: ActivitiesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Activity> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/activities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ActivityFromJSON));
    }

    /**
     * Returns a list of `Activity` objects.
     */
    async activitiesList(requestParameters: ActivitiesListRequest): Promise<MergePaginatedResponse<Activity> | undefined> {
        const response = await this.activitiesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Activity` POSTs.
     */
    async activitiesMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};


        if (requestParameters !== undefined) {
            Object.keys(requestParameters.misc_params_query).forEach((key) => {
                if (requestParameters.misc_params_query[key] !== undefined) {
                    queryParameters[key] = requestParameters.misc_params_query[key];
                }
            })
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/activities/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Activity` POSTs.
     */
    async activitiesMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.activitiesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Activity` object with the given `id`.
     */
    async activitiesRetrieveRaw(requestParameters: ActivitiesRetrieveRequest): Promise<runtime.ApiResponse<Activity | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling activitiesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/activities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivityFromJSON(jsonValue));
    }

    /**
     * Returns an `Activity` object with the given `id`.
     */
    async activitiesRetrieve(requestParameters: ActivitiesRetrieveRequest): Promise<Activity | undefined> {
        const response = await this.activitiesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum ActivitiesListExpandEnum {
    User = 'user'
}
/**
* @export
* @enum {string}
*/
export enum ActivitiesListRemoteFieldsEnum {
    ActivityType = 'activity_type',
    ActivityTypevisibility = 'activity_type,visibility',
    Visibility = 'visibility'
}
/**
* @export
* @enum {string}
*/
export enum ActivitiesListShowEnumOriginsEnum {
    ActivityType = 'activity_type',
    ActivityTypevisibility = 'activity_type,visibility',
    Visibility = 'visibility'
}
/**
* @export
* @enum {string}
*/
export enum ActivitiesRetrieveExpandEnum {
    User = 'user'
}
/**
* @export
* @enum {string}
*/
export enum ActivitiesRetrieveRemoteFieldsEnum {
    ActivityType = 'activity_type',
    ActivityTypevisibility = 'activity_type,visibility',
    Visibility = 'visibility'
}
/**
* @export
* @enum {string}
*/
export enum ActivitiesRetrieveShowEnumOriginsEnum {
    ActivityType = 'activity_type',
    ActivityTypevisibility = 'activity_type,visibility',
    Visibility = 'visibility'
}
