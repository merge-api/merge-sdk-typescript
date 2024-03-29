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
    ContactToJSON,
    MKTGContactEndpointRequest,
    MKTGContactEndpointRequestFromJSON,
    MKTGContactEndpointRequestToJSON,
    MKTGContactResponse,
    MKTGContactResponseFromJSON,
    MKTGContactResponseToJSON,
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

export interface ContactsCreateRequest {
    mKTGContactEndpointRequest: MKTGContactEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface ContactsListRequest {
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
export interface ContactsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class ContactsApi extends runtime.BaseAPI {

    /**
     * Creates a `Contact` object with the given values.
     */
    async contactsCreateRaw(requestParameters: ContactsCreateRequest): Promise<runtime.ApiResponse<MKTGContactResponse | undefined>> {
        if (requestParameters.mKTGContactEndpointRequest === null || requestParameters.mKTGContactEndpointRequest === undefined) {
            throw new runtime.RequiredError('mKTGContactEndpointRequest','Required parameter requestParameters.mKTGContactEndpointRequest was null or undefined when calling contactsCreate.');
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
            path: `/mktg/v1/contacts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MKTGContactEndpointRequestToJSON(requestParameters.mKTGContactEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MKTGContactResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Contact` object with the given values.
     */
    async contactsCreate(requestParameters: ContactsCreateRequest): Promise<MKTGContactResponse | undefined> {
        const response = await this.contactsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async contactsListRaw(requestParameters: ContactsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Contact> | undefined>> {
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
            path: `/mktg/v1/contacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ContactFromJSON));
    }

    /**
     * Returns a list of `Contact` objects.
     */
    async contactsList(requestParameters: ContactsListRequest): Promise<MergePaginatedResponse<Contact> | undefined> {
        const response = await this.contactsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `MKTGContact` POSTs.
     */
    async contactsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/mktg/v1/contacts/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `MKTGContact` POSTs.
     */
    async contactsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.contactsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Contact` object with the given `id`.
     */
    async contactsRetrieveRaw(requestParameters: ContactsRetrieveRequest): Promise<runtime.ApiResponse<Contact | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling contactsRetrieve.');
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
            path: `/mktg/v1/contacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactFromJSON(jsonValue));
    }

    /**
     * Returns a `Contact` object with the given `id`.
     */
    async contactsRetrieve(requestParameters: ContactsRetrieveRequest): Promise<Contact | undefined> {
        const response = await this.contactsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
