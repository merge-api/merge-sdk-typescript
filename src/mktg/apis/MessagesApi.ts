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
    Contact,
    ContactFromJSON,
    Message,
    MessageFromJSON,
    MessageToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface MessagesListRequest {
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

export interface MessagesRecipientsListRequest {
    parentId: string;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface MessagesRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class MessagesApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Message` objects.
     */
    async messagesListRaw(requestParameters: MessagesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Message> | undefined>> {
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
            path: `/mktg/v1/messages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, MessageFromJSON));
    }

    /**
     * Returns a list of `Message` objects.
     */
    async messagesList(requestParameters: MessagesListRequest): Promise<MergePaginatedResponse<Message> | undefined> {
        const response = await this.messagesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async messagesRecipientsListRaw(requestParameters: MessagesRecipientsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Contact> | undefined>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling messagesRecipientsList.');
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
            path: `/mktg/v1/messages/{parent_id}/recipients`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ContactFromJSON));
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async messagesRecipientsList(requestParameters: MessagesRecipientsListRequest): Promise<MergePaginatedResponse<Contact> | undefined> {
        const response = await this.messagesRecipientsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Message` object with the given `id`.
     */
    async messagesRetrieveRaw(requestParameters: MessagesRetrieveRequest): Promise<runtime.ApiResponse<Message | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling messagesRetrieve.');
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
            path: `/mktg/v1/messages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageFromJSON(jsonValue));
    }

    /**
     * Returns a `Message` object with the given `id`.
     */
    async messagesRetrieve(requestParameters: MessagesRetrieveRequest): Promise<Message | undefined> {
        const response = await this.messagesRetrieveRaw(requestParameters);
        return await response.value();
    }

}
