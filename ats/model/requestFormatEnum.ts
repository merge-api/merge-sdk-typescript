/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum RequestFormatEnumExpected {
    Json = <any> 'JSON',
    Xml = <any> 'XML',
    Multipart = <any> 'MULTIPART'
}

export type RequestFormatEnum = RequestFormatEnumExpected | string;
