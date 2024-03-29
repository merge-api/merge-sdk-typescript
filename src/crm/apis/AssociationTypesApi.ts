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
    AssociationType,
    AssociationTypeFromJSON,
    AssociationTypeToJSON,
    CRMAssociationTypeEndpointRequest,
    CRMAssociationTypeEndpointRequestFromJSON,
    CRMAssociationTypeEndpointRequestToJSON,
    CRMAssociationTypeResponse,
    CRMAssociationTypeResponseFromJSON,
    CRMAssociationTypeResponseToJSON,
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

export interface CustomObjectClassesAssociationTypesCreateRequest {
    customObjectClassId: string;
    cRMAssociationTypeEndpointRequest: CRMAssociationTypeEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface CustomObjectClassesAssociationTypesListRequest {
    customObjectClassId: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<CustomObjectClassesAssociationTypesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface CustomObjectClassesAssociationTypesMetaPostRetrieveRequest extends MergeMetaRequest {
    customObjectClassId: string;
}

export interface CustomObjectClassesAssociationTypesRetrieveRequest {
    customObjectClassId: string;
    id: string;
    expand?: Array<CustomObjectClassesAssociationTypesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class AssociationTypesApi extends runtime.BaseAPI {

    /**
     * Creates an `AssociationType` object with the given values.
     */
    async customObjectClassesAssociationTypesCreateRaw(requestParameters: CustomObjectClassesAssociationTypesCreateRequest): Promise<runtime.ApiResponse<CRMAssociationTypeResponse | undefined>> {
        if (requestParameters.customObjectClassId === null || requestParameters.customObjectClassId === undefined) {
            throw new runtime.RequiredError('customObjectClassId','Required parameter requestParameters.customObjectClassId was null or undefined when calling customObjectClassesAssociationTypesCreate.');
        }

        if (requestParameters.cRMAssociationTypeEndpointRequest === null || requestParameters.cRMAssociationTypeEndpointRequest === undefined) {
            throw new runtime.RequiredError('cRMAssociationTypeEndpointRequest','Required parameter requestParameters.cRMAssociationTypeEndpointRequest was null or undefined when calling customObjectClassesAssociationTypesCreate.');
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
            path: `/crm/v1/custom-object-classes/{custom_object_class_id}/association-types`.replace(`{${"custom_object_class_id"}}`, encodeURIComponent(String(requestParameters.customObjectClassId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CRMAssociationTypeEndpointRequestToJSON(requestParameters.cRMAssociationTypeEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CRMAssociationTypeResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `AssociationType` object with the given values.
     */
    async customObjectClassesAssociationTypesCreate(requestParameters: CustomObjectClassesAssociationTypesCreateRequest): Promise<CRMAssociationTypeResponse | undefined> {
        const response = await this.customObjectClassesAssociationTypesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `AssociationType` objects.
     */
    async customObjectClassesAssociationTypesListRaw(requestParameters: CustomObjectClassesAssociationTypesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<AssociationType> | undefined>> {
        if (requestParameters.customObjectClassId === null || requestParameters.customObjectClassId === undefined) {
            throw new runtime.RequiredError('customObjectClassId','Required parameter requestParameters.customObjectClassId was null or undefined when calling customObjectClassesAssociationTypesList.');
        }

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

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
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
            path: `/crm/v1/custom-object-classes/{custom_object_class_id}/association-types`.replace(`{${"custom_object_class_id"}}`, encodeURIComponent(String(requestParameters.customObjectClassId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AssociationTypeFromJSON));
    }

    /**
     * Returns a list of `AssociationType` objects.
     */
    async customObjectClassesAssociationTypesList(requestParameters: CustomObjectClassesAssociationTypesListRequest): Promise<MergePaginatedResponse<AssociationType> | undefined> {
        const response = await this.customObjectClassesAssociationTypesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `CRMAssociationType` POSTs.
     */
    async customObjectClassesAssociationTypesMetaPostRetrieveRaw(requestParameters: CustomObjectClassesAssociationTypesMetaPostRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        if (requestParameters.customObjectClassId === null || requestParameters.customObjectClassId === undefined) {
            throw new runtime.RequiredError('customObjectClassId','Required parameter requestParameters.customObjectClassId was null or undefined when calling customObjectClassesAssociationTypesMetaPostRetrieve.');
        }

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
            path: `/crm/v1/custom-object-classes/{custom_object_class_id}/association-types/meta/post`.replace(`{${"custom_object_class_id"}}`, encodeURIComponent(String(requestParameters.customObjectClassId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `CRMAssociationType` POSTs.
     */
    async customObjectClassesAssociationTypesMetaPostRetrieve(requestParameters: CustomObjectClassesAssociationTypesMetaPostRetrieveRequest): Promise<MetaResponse | undefined> {
        const response = await this.customObjectClassesAssociationTypesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `AssociationType` object with the given `id`.
     */
    async customObjectClassesAssociationTypesRetrieveRaw(requestParameters: CustomObjectClassesAssociationTypesRetrieveRequest): Promise<runtime.ApiResponse<AssociationType | undefined>> {
        if (requestParameters.customObjectClassId === null || requestParameters.customObjectClassId === undefined) {
            throw new runtime.RequiredError('customObjectClassId','Required parameter requestParameters.customObjectClassId was null or undefined when calling customObjectClassesAssociationTypesRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customObjectClassesAssociationTypesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/crm/v1/custom-object-classes/{custom_object_class_id}/association-types/{id}`.replace(`{${"custom_object_class_id"}}`, encodeURIComponent(String(requestParameters.customObjectClassId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssociationTypeFromJSON(jsonValue));
    }

    /**
     * Returns an `AssociationType` object with the given `id`.
     */
    async customObjectClassesAssociationTypesRetrieve(requestParameters: CustomObjectClassesAssociationTypesRetrieveRequest): Promise<AssociationType | undefined> {
        const response = await this.customObjectClassesAssociationTypesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CustomObjectClassesAssociationTypesListExpandEnum {
    TargetObjectClasses = 'target_object_classes'
}
/**
* @export
* @enum {string}
*/
export enum CustomObjectClassesAssociationTypesRetrieveExpandEnum {
    TargetObjectClasses = 'target_object_classes'
}
