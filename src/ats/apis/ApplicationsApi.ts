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
    Application,
    ApplicationFromJSON,
    ApplicationToJSON,
    ApplicationEndpointRequest,
    ApplicationEndpointRequestFromJSON,
    ApplicationEndpointRequestToJSON,
    ApplicationResponse,
    ApplicationResponseFromJSON,
    ApplicationResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
    UpdateApplicationStageRequest,
    UpdateApplicationStageRequestFromJSON,
    UpdateApplicationStageRequestToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface ApplicationsChangeStageCreateRequest {
    id: string;
    isDebugMode?: boolean;
    runAsync?: boolean;
    updateApplicationStageRequest?: UpdateApplicationStageRequest;
}

export interface ApplicationsCreateRequest {
    applicationEndpointRequest: ApplicationEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ApplicationsListRequest {
    candidateId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    creditedToId?: string;
    currentStageId?: string;
    cursor?: string;
    expand?: Array<ApplicationsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    jobId?: string;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    rejectReasonId?: string;
    remoteId?: string | null;
    source?: string | null;
}

export interface ApplicationsMetaPostRetrieveRequest extends MergeMetaRequest {
    applicationRemoteTemplateId?: string;
}

export interface ApplicationsRetrieveRequest {
    id: string;
    expand?: Array<ApplicationsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class ApplicationsApi extends runtime.BaseAPI {

    /**
     * Updates the `current_stage` field of an `Application` object
     */
    async applicationsChangeStageCreateRaw(requestParameters: ApplicationsChangeStageCreateRequest): Promise<runtime.ApiResponse<ApplicationResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsChangeStageCreate.');
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
            path: `/ats/v1/applications/{id}/change-stage`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApplicationStageRequestToJSON(requestParameters.updateApplicationStageRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationResponseFromJSON(jsonValue));
    }

    /**
     * Updates the `current_stage` field of an `Application` object
     */
    async applicationsChangeStageCreate(requestParameters: ApplicationsChangeStageCreateRequest): Promise<ApplicationResponse | undefined> {
        const response = await this.applicationsChangeStageCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates an `Application` object with the given values.
     */
    async applicationsCreateRaw(requestParameters: ApplicationsCreateRequest): Promise<runtime.ApiResponse<ApplicationResponse | undefined>> {
        if (requestParameters.applicationEndpointRequest === null || requestParameters.applicationEndpointRequest === undefined) {
            throw new runtime.RequiredError('applicationEndpointRequest','Required parameter requestParameters.applicationEndpointRequest was null or undefined when calling applicationsCreate.');
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
            path: `/ats/v1/applications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationEndpointRequestToJSON(requestParameters.applicationEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Application` object with the given values.
     */
    async applicationsCreate(requestParameters: ApplicationsCreateRequest): Promise<ApplicationResponse | undefined> {
        const response = await this.applicationsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Application` objects.
     */
    async applicationsListRaw(requestParameters: ApplicationsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Application> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.candidateId !== undefined) {
            queryParameters['candidate_id'] = requestParameters.candidateId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.creditedToId !== undefined) {
            queryParameters['credited_to_id'] = requestParameters.creditedToId;
        }

        if (requestParameters.currentStageId !== undefined) {
            queryParameters['current_stage_id'] = requestParameters.currentStageId;
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

        if (requestParameters.jobId !== undefined) {
            queryParameters['job_id'] = requestParameters.jobId;
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

        if (requestParameters.rejectReasonId !== undefined) {
            queryParameters['reject_reason_id'] = requestParameters.rejectReasonId;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.source !== undefined) {
            queryParameters['source'] = requestParameters.source;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/applications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ApplicationFromJSON));
    }

    /**
     * Returns a list of `Application` objects.
     */
    async applicationsList(requestParameters: ApplicationsListRequest): Promise<MergePaginatedResponse<Application> | undefined> {
        const response = await this.applicationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Application` POSTs.
     */
    async applicationsMetaPostRetrieveRaw(requestParameters: ApplicationsMetaPostRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.applicationRemoteTemplateId !== undefined) {
            queryParameters['application_remote_template_id'] = requestParameters.applicationRemoteTemplateId;
        }


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
            path: `/ats/v1/applications/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Application` POSTs.
     */
    async applicationsMetaPostRetrieve(requestParameters: ApplicationsMetaPostRetrieveRequest): Promise<MetaResponse | undefined> {
        const response = await this.applicationsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Application` object with the given `id`.
     */
    async applicationsRetrieveRaw(requestParameters: ApplicationsRetrieveRequest): Promise<runtime.ApiResponse<Application | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/applications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * Returns an `Application` object with the given `id`.
     */
    async applicationsRetrieve(requestParameters: ApplicationsRetrieveRequest): Promise<Application | undefined> {
        const response = await this.applicationsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum ApplicationsListExpandEnum {
    Candidate = 'candidate',
    CreditedTo = 'credited_to',
    CurrentStage = 'current_stage',
    Job = 'job',
    RejectReason = 'reject_reason'
}
/**
* @export
* @enum {string}
*/
export enum ApplicationsRetrieveExpandEnum {
    Candidate = 'candidate',
    CreditedTo = 'credited_to',
    CurrentStage = 'current_stage',
    Job = 'job',
    RejectReason = 'reject_reason'
}
