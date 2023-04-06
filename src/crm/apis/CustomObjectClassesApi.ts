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
    CustomObjectClass,
    CustomObjectClassFromJSON,
    CustomObjectClassToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface CustomObjectClassesGeneratorUpdateRequest {
    generatorId: string;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface CustomObjectClassesListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<CustomObjectClassesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface CustomObjectClassesRetrieveRequest {
    id: string;
    expand?: Array<CustomObjectClassesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class CustomObjectClassesApi extends runtime.BaseAPI {

    /**
     * Updates a `CustomObjectClass` object with the given `id`.
     */
    async customObjectClassesGeneratorUpdateRaw(requestParameters: CustomObjectClassesGeneratorUpdateRequest): Promise<runtime.ApiResponse<CustomObjectClass | undefined>> {
        if (requestParameters.generatorId === null || requestParameters.generatorId === undefined) {
            throw new runtime.RequiredError('generatorId','Required parameter requestParameters.generatorId was null or undefined when calling customObjectClassesGeneratorUpdate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/custom-object-classes/generator/{generator_id}`.replace(`{${"generator_id"}}`, encodeURIComponent(String(requestParameters.generatorId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomObjectClassFromJSON(jsonValue));
    }

    /**
     * Updates a `CustomObjectClass` object with the given `id`.
     */
    async customObjectClassesGeneratorUpdate(requestParameters: CustomObjectClassesGeneratorUpdateRequest): Promise<CustomObjectClass | undefined> {
        const response = await this.customObjectClassesGeneratorUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `CustomObjectClass` objects.
     */
    async customObjectClassesListRaw(requestParameters: CustomObjectClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<CustomObjectClass> | undefined>> {
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
            path: `/crm/v1/custom-object-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, CustomObjectClassFromJSON));
    }

    /**
     * Returns a list of `CustomObjectClass` objects.
     */
    async customObjectClassesList(requestParameters: CustomObjectClassesListRequest): Promise<MergePaginatedResponse<CustomObjectClass> | undefined> {
        const response = await this.customObjectClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `CustomObjectClass` object with the given `id`.
     */
    async customObjectClassesRetrieveRaw(requestParameters: CustomObjectClassesRetrieveRequest): Promise<runtime.ApiResponse<CustomObjectClass | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling customObjectClassesRetrieve.');
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
            path: `/crm/v1/custom-object-classes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomObjectClassFromJSON(jsonValue));
    }

    /**
     * Returns a `CustomObjectClass` object with the given `id`.
     */
    async customObjectClassesRetrieve(requestParameters: CustomObjectClassesRetrieveRequest): Promise<CustomObjectClass | undefined> {
        const response = await this.customObjectClassesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CustomObjectClassesListExpandEnum {
    Fields = 'fields'
}
/**
* @export
* @enum {string}
*/
export enum CustomObjectClassesRetrieveExpandEnum {
    Fields = 'fields'
}
