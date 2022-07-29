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
export enum RequestTypeEnum {
    Vacation = 'VACATION',
    Sick = 'SICK',
    Personal = 'PERSONAL',
    JuryDuty = 'JURY_DUTY',
    Volunteer = 'VOLUNTEER',
    Bereavement = 'BEREAVEMENT'
}

export function RequestTypeEnumFromJSON(json: any): RequestTypeEnum {
    return RequestTypeEnumFromJSONTyped(json, false);
}

export function RequestTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestTypeEnum {
    return json as RequestTypeEnum;
}

export function RequestTypeEnumToJSON(value?: RequestTypeEnum | null): any {
    return value as any;
}
