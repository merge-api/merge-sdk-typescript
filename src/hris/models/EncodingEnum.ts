/* tslint:disable */
/* eslint-disable */
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

/**
 * 
 * @export
 * @enum {string}
 */
export enum EncodingEnum {
    Raw = 'RAW',
    Base64 = 'BASE64',
    GzipBase64 = 'GZIP_BASE64'
}

export function EncodingEnumFromJSON(json: any): EncodingEnum {
    return EncodingEnumFromJSONTyped(json, false);
}

export function EncodingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncodingEnum {
    return json as EncodingEnum;
}

export function EncodingEnumToJSON(value?: EncodingEnum | null): any {
    return value as any;
}

