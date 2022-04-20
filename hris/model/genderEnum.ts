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

import { RequestFile } from './models';

export enum GenderEnumExpected {
    Male = <any> 'MALE',
    Female = <any> 'FEMALE',
    NonBinary = <any> 'NON-BINARY',
    Other = <any> 'OTHER',
    PreferNotToDisclose = <any> 'PREFER_NOT_TO_DISCLOSE'
}

export type GenderEnum = GenderEnumExpected | string;
