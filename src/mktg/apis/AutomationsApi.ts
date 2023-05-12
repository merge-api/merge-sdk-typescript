/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
    Automation,
    AutomationFromJSON,
    AutomationToJSON,
    MKTGAutomationEndpointRequest,
    MKTGAutomationEndpointRequestFromJSON,
    MKTGAutomationEndpointRequestToJSON,
    MKTGAutomationResponse,
    MKTGAutomationResponseFromJSON,
    MKTGAutomationResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    PaginatedAutomationList,
    PaginatedAutomationListFromJSON,
    PaginatedAutomationListToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface AutomationsCreateRequest {
    mKTGAutomationEndpointRequest: MKTGAutomationEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface AutomationsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

// extends MergeMetaRequest
export interface AutomationsRecipientsListRequest {
    parentId: string;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface AutomationsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class AutomationsApi extends runtime.BaseAPI {

    /**
     * Creates an `Automation` object with the given values.
     */
    async automationsCreateRaw(requestParameters: AutomationsCreateRequest): Promise<runtime.ApiResponse<MKTGAutomationResponse | undefined>> {
        if (requestParameters.mKTGAutomationEndpointRequest === null || requestParameters.mKTGAutomationEndpointRequest === undefined) {
            throw new runtime.RequiredError('mKTGAutomationEndpointRequest','Required parameter requestParameters.mKTGAutomationEndpointRequest was null or undefined when calling automationsCreate.');
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
            path: `/mktg/v1/automations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MKTGAutomationEndpointRequestToJSON(requestParameters.mKTGAutomationEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MKTGAutomationResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Automation` object with the given values.
     */
    async automationsCreate(requestParameters: AutomationsCreateRequest): Promise<MKTGAutomationResponse | undefined> {
        const response = await this.automationsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Automation` objects.
     */
    async automationsListRaw(requestParameters: AutomationsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Automation> | undefined>> {
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

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/mktg/v1/automations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AutomationFromJSON));
    }

    /**
     * Returns a list of `Automation` objects.
     */
    async automationsList(requestParameters: AutomationsListRequest): Promise<MergePaginatedResponse<Automation> | undefined> {
        const response = await this.automationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `MKTGAutomation` POSTs.
     */
    async automationsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/mktg/v1/automations/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `MKTGAutomation` POSTs.
     */
    async automationsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.automationsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async automationsRecipientsListRaw(requestParameters: AutomationsRecipientsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Contact> | undefined>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling automationsRecipientsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/mktg/v1/automations/{parent_id}/recipients`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ContactFromJSON));
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async automationsRecipientsList(requestParameters: AutomationsRecipientsListRequest): Promise<MergePaginatedResponse<Contact> | undefined> {
        const response = await this.automationsRecipientsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Automation` object with the given `id`.
     */
    async automationsRetrieveRaw(requestParameters: AutomationsRetrieveRequest): Promise<runtime.ApiResponse<Automation | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling automationsRetrieve.');
        }

        const queryParameters: any = {};

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
            path: `/mktg/v1/automations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AutomationFromJSON(jsonValue));
    }

    /**
     * Returns an `Automation` object with the given `id`.
     */
    async automationsRetrieve(requestParameters: AutomationsRetrieveRequest): Promise<Automation | undefined> {
        const response = await this.automationsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
