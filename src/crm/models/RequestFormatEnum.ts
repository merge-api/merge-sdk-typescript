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

/**
 * 
 * @export
 * @enum {string}
 */
export enum RequestFormatEnum {
    Json = 'JSON',
    Xml = 'XML',
    Multipart = 'MULTIPART'
}

export function RequestFormatEnumFromJSON(json: any): RequestFormatEnum {
    return RequestFormatEnumFromJSONTyped(json, false);
}

export function RequestFormatEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestFormatEnum {
    return json as RequestFormatEnum;
}

export function RequestFormatEnumToJSON(value?: RequestFormatEnum | null): any {
    return value as any;
}

