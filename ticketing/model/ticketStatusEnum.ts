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

import { RequestFile } from './models';

export enum TicketStatusEnumExpected {
    Open = <any> 'OPEN',
    Closed = <any> 'CLOSED'
}

export type TicketStatusEnum = TicketStatusEnumExpected | string;