/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    AccountingAttachment,
    AccountingAttachmentFromJSON,
    AccountingAttachmentToJSON,
    AccountingAttachmentEndpointRequest,
    AccountingAttachmentEndpointRequestFromJSON,
    AccountingAttachmentEndpointRequestToJSON,
    AccountingAttachmentResponse,
    AccountingAttachmentResponseFromJSON,
    AccountingAttachmentResponseToJSON,
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

export interface AttachmentsCreateRequest {
    accountingAttachmentEndpointRequest: AccountingAttachmentEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface AttachmentsListRequest {
    companyId?: string;
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
export interface AttachmentsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class AttachmentsApi extends runtime.BaseAPI {

    /**
     * Creates an `AccountingAttachment` object with the given values.
     */
    async attachmentsCreateRaw(requestParameters: AttachmentsCreateRequest): Promise<runtime.ApiResponse<AccountingAttachmentResponse | undefined>> {
        if (requestParameters.accountingAttachmentEndpointRequest === null || requestParameters.accountingAttachmentEndpointRequest === undefined) {
            throw new runtime.RequiredError('accountingAttachmentEndpointRequest','Required parameter requestParameters.accountingAttachmentEndpointRequest was null or undefined when calling attachmentsCreate.');
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
            path: `/accounting/v1/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountingAttachmentEndpointRequestToJSON(requestParameters.accountingAttachmentEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountingAttachmentResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `AccountingAttachment` object with the given values.
     */
    async attachmentsCreate(requestParameters: AttachmentsCreateRequest): Promise<AccountingAttachmentResponse | undefined> {
        const response = await this.attachmentsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `AccountingAttachment` objects.
     */
    async attachmentsListRaw(requestParameters: AttachmentsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<AccountingAttachment> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

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
            path: `/accounting/v1/attachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AccountingAttachmentFromJSON));
    }

    /**
     * Returns a list of `AccountingAttachment` objects.
     */
    async attachmentsList(requestParameters: AttachmentsListRequest): Promise<MergePaginatedResponse<AccountingAttachment> | undefined> {
        const response = await this.attachmentsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `AccountingAttachment` POSTs.
     */
    async attachmentsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/accounting/v1/attachments/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `AccountingAttachment` POSTs.
     */
    async attachmentsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.attachmentsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `AccountingAttachment` object with the given `id`.
     */
    async attachmentsRetrieveRaw(requestParameters: AttachmentsRetrieveRequest): Promise<runtime.ApiResponse<AccountingAttachment | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling attachmentsRetrieve.');
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
            path: `/accounting/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountingAttachmentFromJSON(jsonValue));
    }

    /**
     * Returns an `AccountingAttachment` object with the given `id`.
     */
    async attachmentsRetrieve(requestParameters: AttachmentsRetrieveRequest): Promise<AccountingAttachment | undefined> {
        const response = await this.attachmentsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
