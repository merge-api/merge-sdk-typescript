/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    
    TimeOff,
    TimeOffFromJSON,
    TimeOffToJSON,
    TimeOffEndpointRequest,
    TimeOffEndpointRequestFromJSON,
    TimeOffEndpointRequestToJSON,
    TimeOffResponse,
    TimeOffResponseFromJSON,
    TimeOffResponseToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface TimeOffCreateRequest {
    timeOffEndpointRequest: TimeOffEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface TimeOffListRequest {
    approverId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    employeeId?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: TimeOffListRemoteFieldsEnum;
    remoteId?: string | null;
    requestType?: TimeOffListRequestTypeEnum;
    status?: TimeOffListStatusEnum;
}

export interface TimeOffRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: TimeOffRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class TimeOffApi extends runtime.BaseAPI {

    /**
     * Creates a `TimeOff` object with the given values.
     */
    async timeOffCreateRaw(requestParameters: TimeOffCreateRequest): Promise<runtime.ApiResponse<TimeOffResponse | undefined>> {
        if (requestParameters.timeOffEndpointRequest === null || requestParameters.timeOffEndpointRequest === undefined) {
            throw new runtime.RequiredError('timeOffEndpointRequest','Required parameter requestParameters.timeOffEndpointRequest was null or undefined when calling timeOffCreate.');
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
            path: `/hris/v1/time-off`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeOffEndpointRequestToJSON(requestParameters.timeOffEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeOffResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `TimeOff` object with the given values.
     */
    async timeOffCreate(requestParameters: TimeOffCreateRequest): Promise<TimeOffResponse | undefined> {
        const response = await this.timeOffCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `TimeOff` objects.
     */
    async timeOffListRaw(requestParameters: TimeOffListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<TimeOff> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.approverId !== undefined) {
            queryParameters['approver_id'] = requestParameters.approverId;
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

        if (requestParameters.employeeId !== undefined) {
            queryParameters['employee_id'] = requestParameters.employeeId;
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

        if (requestParameters.requestType !== undefined) {
            queryParameters['request_type'] = requestParameters.requestType;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/time-off`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `TimeOff` objects.
     */
    async timeOffList(requestParameters: TimeOffListRequest): Promise<MergePaginatedResponse<TimeOff> | undefined> {
        const response = await this.timeOffListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `TimeOff` POSTs.
     */
    async timeOffMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/time-off/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `TimeOff` POSTs.
     */
    async timeOffMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.timeOffMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns a `TimeOff` object with the given `id`.
     */
    async timeOffRetrieveRaw(requestParameters: TimeOffRetrieveRequest): Promise<runtime.ApiResponse<TimeOff | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling timeOffRetrieve.');
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
            path: `/hris/v1/time-off/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeOffFromJSON(jsonValue));
    }

    /**
     * Returns a `TimeOff` object with the given `id`.
     */
    async timeOffRetrieve(requestParameters: TimeOffRetrieveRequest): Promise<TimeOff | undefined> {
        const response = await this.timeOffRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum TimeOffListRemoteFieldsEnum {
    RequestType = 'request_type',
    RequestTypestatus = 'request_type,status',
    RequestTypestatusunits = 'request_type,status,units',
    RequestTypeunits = 'request_type,units',
    Status = 'status',
    Statusunits = 'status,units',
    Units = 'units'
}
/**
    * @export
    * @enum {string}
    */
export enum TimeOffListRequestTypeEnum {
    Bereavement = 'BEREAVEMENT',
    JuryDuty = 'JURY_DUTY',
    Personal = 'PERSONAL',
    Sick = 'SICK',
    Vacation = 'VACATION',
    Volunteer = 'VOLUNTEER'
}
/**
    * @export
    * @enum {string}
    */
export enum TimeOffListStatusEnum {
    Approved = 'APPROVED',
    Cancelled = 'CANCELLED',
    Declined = 'DECLINED',
    Deleted = 'DELETED',
    Requested = 'REQUESTED'
}
/**
    * @export
    * @enum {string}
    */
export enum TimeOffRetrieveRemoteFieldsEnum {
    RequestType = 'request_type',
    RequestTypestatus = 'request_type,status',
    RequestTypestatusunits = 'request_type,status,units',
    RequestTypeunits = 'request_type,units',
    Status = 'status',
    Statusunits = 'status,units',
    Units = 'units'
}
