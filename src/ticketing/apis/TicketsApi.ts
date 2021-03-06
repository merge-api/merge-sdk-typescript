/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    Ticket,
    TicketFromJSON,
    TicketToJSON,
    TicketEndpointRequest,
    TicketEndpointRequestFromJSON,
    TicketEndpointRequestToJSON,
    TicketResponse,
    TicketResponseFromJSON,
    TicketResponseToJSON,
    User,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface TicketsCollaboratorsListRequest {
    id: string;
    cursor?: string;
    includeRemoteData?: boolean;
    pageSize?: number;
}

export interface TicketsCreateRequest {
    ticketEndpointRequest: TicketEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface TicketsListRequest {
    accountId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    projectId?: string;
    remoteFields?: TicketsListRemoteFieldsEnum;
    remoteId?: string | null;
}

export interface TicketsRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: TicketsRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class TicketsApi extends runtime.BaseAPI {

    /**
     * Returns a `User` object with the given `id`.
     */
    async ticketsCollaboratorsListRaw(requestParameters: TicketsCollaboratorsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<User> | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ticketsCollaboratorsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
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
            path: `/ticketing/v1/tickets/{id}/collaborators`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a `User` object with the given `id`.
     */
    async ticketsCollaboratorsList(requestParameters: TicketsCollaboratorsListRequest): Promise<MergePaginatedResponse<User> | undefined> {
        const response = await this.ticketsCollaboratorsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a `Ticket` object with the given values.
     */
    async ticketsCreateRaw(requestParameters: TicketsCreateRequest): Promise<runtime.ApiResponse<TicketResponse | undefined>> {
        if (requestParameters.ticketEndpointRequest === null || requestParameters.ticketEndpointRequest === undefined) {
            throw new runtime.RequiredError('ticketEndpointRequest','Required parameter requestParameters.ticketEndpointRequest was null or undefined when calling ticketsCreate.');
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
            path: `/ticketing/v1/tickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TicketEndpointRequestToJSON(requestParameters.ticketEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Ticket` object with the given values.
     */
    async ticketsCreate(requestParameters: TicketsCreateRequest): Promise<TicketResponse | undefined> {
        const response = await this.ticketsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Ticket` objects.
     */
    async ticketsListRaw(requestParameters: TicketsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Ticket> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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

        if (requestParameters.projectId !== undefined) {
            queryParameters['project_id'] = requestParameters.projectId;
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
            path: `/ticketing/v1/tickets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Ticket` objects.
     */
    async ticketsList(requestParameters: TicketsListRequest): Promise<MergePaginatedResponse<Ticket> | undefined> {
        const response = await this.ticketsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Ticket` POSTs.
     */
    async ticketsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/tickets/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Ticket` POSTs.
     */
    async ticketsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.ticketsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns a `Ticket` object with the given `id`.
     */
    async ticketsRetrieveRaw(requestParameters: TicketsRetrieveRequest): Promise<runtime.ApiResponse<Ticket | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ticketsRetrieve.');
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
            path: `/ticketing/v1/tickets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketFromJSON(jsonValue));
    }

    /**
     * Returns a `Ticket` object with the given `id`.
     */
    async ticketsRetrieve(requestParameters: TicketsRetrieveRequest): Promise<Ticket | undefined> {
        const response = await this.ticketsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum TicketsListRemoteFieldsEnum {
    Status = 'status'
}
/**
    * @export
    * @enum {string}
    */
export enum TicketsRetrieveRemoteFieldsEnum {
    Status = 'status'
}
