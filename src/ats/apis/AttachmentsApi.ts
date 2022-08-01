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
    Attachment,
    AttachmentFromJSON,
    AttachmentToJSON,
    AttachmentEndpointRequest,
    AttachmentEndpointRequestFromJSON,
    AttachmentEndpointRequestToJSON,
    AttachmentResponse,
    AttachmentResponseFromJSON,
    AttachmentResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface AttachmentsCreateRequest {
    attachmentEndpointRequest: AttachmentEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface AttachmentsListRequest {
    candidateId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: AttachmentsListRemoteFieldsEnum;
    remoteId?: string | null;
}

export interface AttachmentsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: AttachmentsRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class AttachmentsApi extends runtime.BaseAPI {

    /**
     * Creates an `Attachment` object with the given values.
     */
    async attachmentsCreateRaw(requestParameters: AttachmentsCreateRequest): Promise<runtime.ApiResponse<AttachmentResponse | undefined>> {
        if (requestParameters.attachmentEndpointRequest === null || requestParameters.attachmentEndpointRequest === undefined) {
            throw new runtime.RequiredError('attachmentEndpointRequest','Required parameter requestParameters.attachmentEndpointRequest was null or undefined when calling attachmentsCreate.');
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
            path: `/ats/v1/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachmentEndpointRequestToJSON(requestParameters.attachmentEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Attachment` object with the given values.
     */
    async attachmentsCreate(requestParameters: AttachmentsCreateRequest): Promise<AttachmentResponse | undefined> {
        const response = await this.attachmentsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Attachment` objects.
     */
    async attachmentsListRaw(requestParameters: AttachmentsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Attachment> | undefined>> {
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

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
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
            path: `/ats/v1/attachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Attachment` objects.
     */
    async attachmentsList(requestParameters: AttachmentsListRequest): Promise<MergePaginatedResponse<Attachment> | undefined> {
        const response = await this.attachmentsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Attachment` POSTs.
     */
    async attachmentsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/attachments/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Attachment` POSTs.
     */
    async attachmentsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.attachmentsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns an `Attachment` object with the given `id`.
     */
    async attachmentsRetrieveRaw(requestParameters: AttachmentsRetrieveRequest): Promise<runtime.ApiResponse<Attachment | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling attachmentsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentFromJSON(jsonValue));
    }

    /**
     * Returns an `Attachment` object with the given `id`.
     */
    async attachmentsRetrieve(requestParameters: AttachmentsRetrieveRequest): Promise<Attachment | undefined> {
        const response = await this.attachmentsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum AttachmentsListRemoteFieldsEnum {
    AttachmentType = 'attachment_type'
}
/**
    * @export
    * @enum {string}
    */
export enum AttachmentsRetrieveRemoteFieldsEnum {
    AttachmentType = 'attachment_type'
}
