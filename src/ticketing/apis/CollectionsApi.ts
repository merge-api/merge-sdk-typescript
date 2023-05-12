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
    Collection,
    CollectionFromJSON,
    CollectionToJSON,
    PaginatedCollectionList,
    PaginatedCollectionListFromJSON,
    PaginatedCollectionListToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface CollectionsListRequest {
    collectionType?: CollectionsListCollectionTypeEnum;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<CollectionsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    parentCollectionId?: string;
    remoteFields?: CollectionsListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: CollectionsListShowEnumOriginsEnum;
}

export interface CollectionsRetrieveRequest {
    id: string;
    expand?: Array<CollectionsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: CollectionsRetrieveRemoteFieldsEnum;
    showEnumOrigins?: CollectionsRetrieveShowEnumOriginsEnum;
}

export interface CollectionsUsersListRequest {
    parentId: string;
    cursor?: string;
    expand?: Array<CollectionsUsersListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    pageSize?: number;
}

/**
 * 
 */
export class CollectionsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Collection` objects.
     */
    async collectionsListRaw(requestParameters: CollectionsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Collection> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.collectionType !== undefined) {
            queryParameters['collection_type'] = requestParameters.collectionType;
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

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.parentCollectionId !== undefined) {
            queryParameters['parent_collection_id'] = requestParameters.parentCollectionId;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, CollectionFromJSON));
    }

    /**
     * Returns a list of `Collection` objects.
     */
    async collectionsList(requestParameters: CollectionsListRequest): Promise<MergePaginatedResponse<Collection> | undefined> {
        const response = await this.collectionsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Collection` object with the given `id`.
     */
    async collectionsRetrieveRaw(requestParameters: CollectionsRetrieveRequest): Promise<runtime.ApiResponse<Collection | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling collectionsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/collections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionFromJSON(jsonValue));
    }

    /**
     * Returns a `Collection` object with the given `id`.
     */
    async collectionsRetrieve(requestParameters: CollectionsRetrieveRequest): Promise<Collection | undefined> {
        const response = await this.collectionsRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `User` objects.
     */
    async collectionsUsersListRaw(requestParameters: CollectionsUsersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<User> | undefined>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling collectionsUsersList.');
        }

        const queryParameters: any = {};

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
            path: `/ticketing/v1/collections/{parent_id}/users`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, UserFromJSON));
    }

    /**
     * Returns a list of `User` objects.
     */
    async collectionsUsersList(requestParameters: CollectionsUsersListRequest): Promise<MergePaginatedResponse<User> | undefined> {
        const response = await this.collectionsUsersListRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CollectionsListCollectionTypeEnum {
    List = 'LIST',
    Project = 'PROJECT'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsListExpandEnum {
    ParentCollection = 'parent_collection'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsListRemoteFieldsEnum {
    CollectionType = 'collection_type'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsListShowEnumOriginsEnum {
    CollectionType = 'collection_type'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsRetrieveExpandEnum {
    ParentCollection = 'parent_collection'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsRetrieveRemoteFieldsEnum {
    CollectionType = 'collection_type'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsRetrieveShowEnumOriginsEnum {
    CollectionType = 'collection_type'
}
/**
* @export
* @enum {string}
*/
export enum CollectionsUsersListExpandEnum {
    Teams = 'teams'
}
