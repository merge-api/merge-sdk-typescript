/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    Lead,
    LeadFromJSON,
    LeadToJSON,
    LeadEndpointRequest,
    LeadEndpointRequestFromJSON,
    LeadEndpointRequestToJSON,
    LeadResponse,
    LeadResponseFromJSON,
    LeadResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    RemoteFieldClass,
    RemoteFieldClassFromJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface LeadsCreateRequest {
    leadEndpointRequest: LeadEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface LeadsListRequest {
    convertedAccountId?: string;
    convertedContactId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<LeadsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    ownerId?: string;
    pageSize?: number;
    remoteId?: string | null;
}

// extends MergeMetaRequest
export interface LeadsRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    pageSize?: number;
}

export interface LeadsRetrieveRequest {
    id: string;
    expand?: Array<LeadsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
}

/**
 * 
 */
export class LeadsApi extends runtime.BaseAPI {

    /**
     * Creates a `Lead` object with the given values.
     */
    async leadsCreateRaw(requestParameters: LeadsCreateRequest): Promise<runtime.ApiResponse<LeadResponse | undefined>> {
        if (requestParameters.leadEndpointRequest === null || requestParameters.leadEndpointRequest === undefined) {
            throw new runtime.RequiredError('leadEndpointRequest','Required parameter requestParameters.leadEndpointRequest was null or undefined when calling leadsCreate.');
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
            path: `/crm/v1/leads`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LeadEndpointRequestToJSON(requestParameters.leadEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LeadResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Lead` object with the given values.
     */
    async leadsCreate(requestParameters: LeadsCreateRequest): Promise<LeadResponse | undefined> {
        const response = await this.leadsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Lead` objects.
     */
    async leadsListRaw(requestParameters: LeadsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Lead> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.convertedAccountId !== undefined) {
            queryParameters['converted_account_id'] = requestParameters.convertedAccountId;
        }

        if (requestParameters.convertedContactId !== undefined) {
            queryParameters['converted_contact_id'] = requestParameters.convertedContactId;
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

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.ownerId !== undefined) {
            queryParameters['owner_id'] = requestParameters.ownerId;
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
            path: `/crm/v1/leads`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, LeadFromJSON));
    }

    /**
     * Returns a list of `Lead` objects.
     */
    async leadsList(requestParameters: LeadsListRequest): Promise<MergePaginatedResponse<Lead> | undefined> {
        const response = await this.leadsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Lead` POSTs.
     */
    async leadsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/crm/v1/leads/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Lead` POSTs.
     */
    async leadsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.leadsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async leadsRemoteFieldClassesListRaw(requestParameters: LeadsRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
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

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
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
            path: `/crm/v1/leads/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async leadsRemoteFieldClassesList(requestParameters: LeadsRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.leadsRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Lead` object with the given `id`.
     */
    async leadsRetrieveRaw(requestParameters: LeadsRetrieveRequest): Promise<runtime.ApiResponse<Lead | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling leadsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/leads/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LeadFromJSON(jsonValue));
    }

    /**
     * Returns a `Lead` object with the given `id`.
     */
    async leadsRetrieve(requestParameters: LeadsRetrieveRequest): Promise<Lead | undefined> {
        const response = await this.leadsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum LeadsListExpandEnum {
    ConvertedAccount = 'converted_account',
    ConvertedContact = 'converted_contact',
    Owner = 'owner'
}
/**
* @export
* @enum {string}
*/
export enum LeadsRetrieveExpandEnum {
    ConvertedAccount = 'converted_account',
    ConvertedContact = 'converted_contact',
    Owner = 'owner'
}
