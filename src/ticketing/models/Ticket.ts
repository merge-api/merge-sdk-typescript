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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    
    TicketStatusEnum,
    TicketStatusEnumFromJSON,
    TicketStatusEnumFromJSONTyped,
    TicketStatusEnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Ticket Object
 * ### Description
 * The `Ticket` object is used to represent a ticket or a task within a system.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface Ticket
 */
export interface Ticket {
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Ticket
     */
    remote_id?: string | null;
    /**
     * The ticket's name.
     * @type {string}
     * @memberof Ticket
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Ticket
     */
    assignees?: Array<string>;
    /**
     * The ticket's due date.
     * @type {Date}
     * @memberof Ticket
     */
    due_date?: Date | null;
    /**
     * The current status of the ticket.
     * @type {TicketStatusEnum}
     * @memberof Ticket
     */
    status?: TicketStatusEnum | null;
    /**
     * The ticket's description.
     * @type {string}
     * @memberof Ticket
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    project?: string | null;
    /**
     * The ticket's type.
     * @type {string}
     * @memberof Ticket
     */
    ticket_type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    account?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    contact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    parent_ticket?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Ticket
     */
    attachments?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Ticket
     */
    tags?: Array<string>;
    /**
     * When the third party's ticket was created.
     * @type {Date}
     * @memberof Ticket
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's ticket was updated.
     * @type {Date}
     * @memberof Ticket
     */
    remote_updated_at?: Date | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Ticket
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Ticket
     */
    readonly remote_was_deleted?: boolean;
}

export function TicketFromJSON(json: JSONValue): Ticket | undefined {
    return TicketFromJSONTyped(json);
}

export function TicketFromJSONTyped(json: JSONValue): Ticket | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'assignees': !exists(json, 'assignees') ? undefined : json['assignees'],
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'status': !exists(json, 'status') ? undefined : TicketStatusEnumFromJSON(json['status']) as TicketStatusEnum,
        'description': !exists(json, 'description') ? undefined : json['description'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'ticket_type': !exists(json, 'ticket_type') ? undefined : json['ticket_type'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'parent_ticket': !exists(json, 'parent_ticket') ? undefined : json['parent_ticket'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TicketToJSON(value?: Ticket): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'assignees': value.assignees,
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'status': TicketStatusEnumToJSON(value.status),
        'description': value.description,
        'project': value.project,
        'ticket_type': value.ticket_type,
        'account': value.account,
        'contact': value.contact,
        'parent_ticket': value.parent_ticket,
        'attachments': value.attachments,
        'tags': value.tags,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
    };
}
