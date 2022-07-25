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


import * as runtime from '../runtime';
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
    PaginatedApplicationList,
    PaginatedApplicationListFromJSON,
    PaginatedApplicationListToJSON,
} from '../models';

export interface ApplicationsCreateRequest {
    xAccountToken: string;
    applicationEndpointRequest: ApplicationEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ApplicationsListRequest {
    xAccountToken: string;
    candidateId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    creditedToId?: string;
    currentStageId?: string;
    cursor?: string;
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

export interface ApplicationsMetaPostRetrieveRequest {
    xAccountToken: string;
    applicationRemoteTemplateId?: string;
}

export interface ApplicationsRetrieveRequest {
    xAccountToken: string;
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class ApplicationsApi extends runtime.BaseAPI {

    /**
     * Creates an `Application` object with the given values.
     */
    async applicationsCreateRaw(requestParameters: ApplicationsCreateRequest): Promise<runtime.ApiResponse<ApplicationResponse>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling applicationsCreate.');
        }

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

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/applications`,
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
    async applicationsCreate(requestParameters: ApplicationsCreateRequest): Promise<ApplicationResponse> {
        const response = await this.applicationsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Application` objects.
     */
    async applicationsListRaw(requestParameters: ApplicationsListRequest): Promise<runtime.ApiResponse<PaginatedApplicationList>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling applicationsList.');
        }

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

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/applications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedApplicationListFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Application` objects.
     */
    async applicationsList(requestParameters: ApplicationsListRequest): Promise<PaginatedApplicationList> {
        const response = await this.applicationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Application` POSTs.
     */
    async applicationsMetaPostRetrieveRaw(requestParameters: ApplicationsMetaPostRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling applicationsMetaPostRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.applicationRemoteTemplateId !== undefined) {
            queryParameters['application_remote_template_id'] = requestParameters.applicationRemoteTemplateId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/applications/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Application` POSTs.
     */
    async applicationsMetaPostRetrieve(requestParameters: ApplicationsMetaPostRetrieveRequest): Promise<MetaResponse> {
        const response = await this.applicationsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Application` object with the given `id`.
     */
    async applicationsRetrieveRaw(requestParameters: ApplicationsRetrieveRequest): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling applicationsRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/applications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * Returns an `Application` object with the given `id`.
     */
    async applicationsRetrieve(requestParameters: ApplicationsRetrieveRequest): Promise<Application> {
        const response = await this.applicationsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
