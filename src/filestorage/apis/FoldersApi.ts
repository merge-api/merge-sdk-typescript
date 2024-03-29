/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    FileStorageFolderEndpointRequest,
    FileStorageFolderEndpointRequestFromJSON,
    FileStorageFolderEndpointRequestToJSON,
    FileStorageFolderResponse,
    FileStorageFolderResponseFromJSON,
    FileStorageFolderResponseToJSON,
    Folder,
    FolderFromJSON,
    FolderToJSON,
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

export interface FoldersCreateRequest {
    fileStorageFolderEndpointRequest: FileStorageFolderEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface FoldersListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    driveId?: string;
    expand?: Array<FoldersListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    name?: string | null;
    pageSize?: number;
    parentFolderId?: string;
    remoteId?: string | null;
}

// extends MergeMetaRequest
export interface FoldersRetrieveRequest {
    id: string;
    expand?: Array<FoldersRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class FoldersApi extends runtime.BaseAPI {

    /**
     * Creates a `Folder` object with the given values.
     */
    async foldersCreateRaw(requestParameters: FoldersCreateRequest): Promise<runtime.ApiResponse<FileStorageFolderResponse | undefined>> {
        if (requestParameters.fileStorageFolderEndpointRequest === null || requestParameters.fileStorageFolderEndpointRequest === undefined) {
            throw new runtime.RequiredError('fileStorageFolderEndpointRequest','Required parameter requestParameters.fileStorageFolderEndpointRequest was null or undefined when calling foldersCreate.');
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
            path: `/filestorage/v1/folders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FileStorageFolderEndpointRequestToJSON(requestParameters.fileStorageFolderEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStorageFolderResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Folder` object with the given values.
     */
    async foldersCreate(requestParameters: FoldersCreateRequest): Promise<FileStorageFolderResponse | undefined> {
        const response = await this.foldersCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Folder` objects.
     */
    async foldersListRaw(requestParameters: FoldersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Folder> | undefined>> {
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

        if (requestParameters.driveId !== undefined) {
            queryParameters['drive_id'] = requestParameters.driveId;
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

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.parentFolderId !== undefined) {
            queryParameters['parent_folder_id'] = requestParameters.parentFolderId;
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
            path: `/filestorage/v1/folders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, FolderFromJSON));
    }

    /**
     * Returns a list of `Folder` objects.
     */
    async foldersList(requestParameters: FoldersListRequest): Promise<MergePaginatedResponse<Folder> | undefined> {
        const response = await this.foldersListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `FileStorageFolder` POSTs.
     */
    async foldersMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/filestorage/v1/folders/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `FileStorageFolder` POSTs.
     */
    async foldersMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.foldersMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Folder` object with the given `id`.
     */
    async foldersRetrieveRaw(requestParameters: FoldersRetrieveRequest): Promise<runtime.ApiResponse<Folder | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling foldersRetrieve.');
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
            path: `/filestorage/v1/folders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FolderFromJSON(jsonValue));
    }

    /**
     * Returns a `Folder` object with the given `id`.
     */
    async foldersRetrieve(requestParameters: FoldersRetrieveRequest): Promise<Folder | undefined> {
        const response = await this.foldersRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum FoldersListExpandEnum {
    Drive = 'drive',
    ParentFolder = 'parent_folder',
    Permissions = 'permissions'
}
/**
* @export
* @enum {string}
*/
export enum FoldersRetrieveExpandEnum {
    Drive = 'drive',
    ParentFolder = 'parent_folder',
    Permissions = 'permissions'
}
