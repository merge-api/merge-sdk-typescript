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
    MKTGTemplateEndpointRequest,
    MKTGTemplateEndpointRequestFromJSON,
    MKTGTemplateEndpointRequestToJSON,
    MKTGTemplateResponse,
    MKTGTemplateResponseFromJSON,
    MKTGTemplateResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
    Template,
    TemplateFromJSON,
    TemplateToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface TemplatesCreateRequest {
    mKTGTemplateEndpointRequest: MKTGTemplateEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface TemplatesListRequest {
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
export interface TemplatesRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class TemplatesApi extends runtime.BaseAPI {

    /**
     * Creates a `Template` object with the given values.
     */
    async templatesCreateRaw(requestParameters: TemplatesCreateRequest): Promise<runtime.ApiResponse<MKTGTemplateResponse | undefined>> {
        if (requestParameters.mKTGTemplateEndpointRequest === null || requestParameters.mKTGTemplateEndpointRequest === undefined) {
            throw new runtime.RequiredError('mKTGTemplateEndpointRequest','Required parameter requestParameters.mKTGTemplateEndpointRequest was null or undefined when calling templatesCreate.');
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
            path: `/mktg/v1/templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MKTGTemplateEndpointRequestToJSON(requestParameters.mKTGTemplateEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MKTGTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Template` object with the given values.
     */
    async templatesCreate(requestParameters: TemplatesCreateRequest): Promise<MKTGTemplateResponse | undefined> {
        const response = await this.templatesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Template` objects.
     */
    async templatesListRaw(requestParameters: TemplatesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Template> | undefined>> {
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
            path: `/mktg/v1/templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, TemplateFromJSON));
    }

    /**
     * Returns a list of `Template` objects.
     */
    async templatesList(requestParameters: TemplatesListRequest): Promise<MergePaginatedResponse<Template> | undefined> {
        const response = await this.templatesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `MKTGTemplate` POSTs.
     */
    async templatesMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/mktg/v1/templates/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `MKTGTemplate` POSTs.
     */
    async templatesMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.templatesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Template` object with the given `id`.
     */
    async templatesRetrieveRaw(requestParameters: TemplatesRetrieveRequest): Promise<runtime.ApiResponse<Template | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling templatesRetrieve.');
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
            path: `/mktg/v1/templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateFromJSON(jsonValue));
    }

    /**
     * Returns a `Template` object with the given `id`.
     */
    async templatesRetrieve(requestParameters: TemplatesRetrieveRequest): Promise<Template | undefined> {
        const response = await this.templatesRetrieveRaw(requestParameters);
        return await response.value();
    }

}
