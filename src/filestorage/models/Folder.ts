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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';

/**
 * # The Folder Object
 * ### Description
 * The `Folder` object is used to represent a collection of files and/or folders in the workspace. Could be within a drive, if it exsts.
 * ### Usage Example
 * Fetch from the `GET /api/file-storage/v1/folders` endpoint and view their folders.
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     * 
     * @type {string}
     * @memberof Folder
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Folder
     */
    remote_id?: string | null;
    /**
     * The folder's name.
     * @type {string}
     * @memberof Folder
     */
    name?: string | null;
    /**
     * The URL to access the folder.
     * @type {string}
     * @memberof Folder
     */
    folder_url?: string | null;
    /**
     * The folder's size, in bytes.
     * @type {number}
     * @memberof Folder
     */
    size?: number | null;
    /**
     * The folder's description.
     * @type {string}
     * @memberof Folder
     */
    description?: string | null;
    /**
     * The folder that the folder belongs to.
     * @type {string}
     * @memberof Folder
     */
    parent_folder?: string | null;
    /**
     * The drive that the folder belongs to.
     * @type {string}
     * @memberof Folder
     */
    drive?: string | null;
    /**
     * When the third party's folder was created.
     * @type {Date}
     * @memberof Folder
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's folder was updated.
     * @type {Date}
     * @memberof Folder
     */
    remote_updated_at?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Folder
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Folder
     */
    remote_data?: Array<{ [key: string]: any; }> | null;
}

export function FolderFromJSON(json: JSONValue): Folder | undefined {
    return FolderFromJSONTyped(json);
}

export function FolderFromJSONTyped(json: JSONValue): Folder | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'folder_url': !exists(json, 'folder_url') ? undefined : json['folder_url'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'parent_folder': !exists(json, 'parent_folder') ? undefined : json['parent_folder'],
        'drive': !exists(json, 'drive') ? undefined : json['drive'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : json['remote_data'],
    };
}

export function FolderToJSON(value?: Folder): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'folder_url': value.folder_url,
        'size': value.size,
        'description': value.description,
        'parent_folder': value.parent_folder,
        'drive': value.drive,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_data': value.remote_data,
    };
}

