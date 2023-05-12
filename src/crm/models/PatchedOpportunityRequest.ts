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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    OpportunityStatusEnum,
    OpportunityStatusEnumFromJSON,
    OpportunityStatusEnumFromJSONTyped,
    OpportunityStatusEnumToJSON,
    RemoteFieldRequest,
    RemoteFieldRequestFromJSON,
    RemoteFieldRequestFromJSONTyped,
    RemoteFieldRequestToJSON,
} from './';


/**
 * # The Opportunity Object
 * ### Description
 * The `Opportunity` object is used to represent a deal opportunity in a CRM system.
 * ### Usage Example
 * TODO
 * @export
 * @interface PatchedOpportunityRequest
 */
export interface PatchedOpportunityRequest {
    /**
     * The opportunity's name.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    name?: string | null;
    /**
     * The opportunity's description.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    description?: string | null;
    /**
     * The opportunity's amount.
     * @type {number}
     * @memberof PatchedOpportunityRequest
     */
    amount?: number | null;
    /**
     * The opportunity's owner.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    owner?: string | null;
    /**
     * The account of the opportunity.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    account?: string | null;
    /**
     * The stage of the opportunity.
     * @type {string}
     * @memberof PatchedOpportunityRequest
     */
    stage?: string | null;
    /**
     * The opportunity's status.
     * 
     * * `OPEN` - OPEN
     * * `WON` - WON
     * * `LOST` - LOST
     * @type {OpportunityStatusEnum}
     * @memberof PatchedOpportunityRequest
     */
    status?: OpportunityStatusEnum | null;
    /**
     * When the opportunity's last activity occurred.
     * @type {Date}
     * @memberof PatchedOpportunityRequest
     */
    last_activity_at?: Date | null;
    /**
     * When the opportunity was closed.
     * @type {Date}
     * @memberof PatchedOpportunityRequest
     */
    close_date?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedOpportunityRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PatchedOpportunityRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteFieldRequest>}
     * @memberof PatchedOpportunityRequest
     */
    remote_fields?: Array<RemoteFieldRequest>;
}

export function PatchedOpportunityRequestFromJSON(json: JSONValue): PatchedOpportunityRequest | undefined {
    return PatchedOpportunityRequestFromJSONTyped(json);
}

export function PatchedOpportunityRequestFromJSONTyped(json: JSONValue): PatchedOpportunityRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'status': !exists(json, 'status') ? undefined : OpportunityStatusEnumFromJSON(json['status']) as OpportunityStatusEnum,
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'close_date': !exists(json, 'close_date') ? undefined : (json['close_date'] === null ? null : new Date(json['close_date'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldRequestFromJSON)) as Array<RemoteFieldRequest>,
    };
}

export function PatchedOpportunityRequestToJSON(value?: PatchedOpportunityRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'description': value.description,
        'amount': value.amount,
        'owner': value.owner,
        'account': value.account,
        'stage': value.stage,
        'status': OpportunityStatusEnumToJSON(value.status),
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'close_date': value.close_date === undefined ? undefined : (value.close_date === null ? null : value.close_date.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
        'remote_fields': value.remote_fields === undefined ? undefined : ((value.remote_fields as Array<any>).map(RemoteFieldRequestToJSON)),
    };
}

