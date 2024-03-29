/* tslint:disable */
/* eslint-disable */
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

import { JSONValue } from "../../merge_json";

/**
 * * `SUPER_ADMIN` - SUPER_ADMIN
 * * `ADMIN` - ADMIN
 * * `TEAM_MEMBER` - TEAM_MEMBER
 * * `LIMITED_TEAM_MEMBER` - LIMITED_TEAM_MEMBER
 * * `INTERVIEWER` - INTERVIEWER
 * @export
 * @enum {string}
 */
export enum AccessRoleEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    SuperAdmin = 'SUPER_ADMIN',
    Admin = 'ADMIN',
    TeamMember = 'TEAM_MEMBER',
    LimitedTeamMember = 'LIMITED_TEAM_MEMBER',
    Interviewer = 'INTERVIEWER'
}

export interface AccessRoleEnum {
    value: AccessRoleEnumValues,
    rawValue: string
}


export function AccessRoleEnumFromJSON(json: any): AccessRoleEnum {
    return AccessRoleEnumFromJSONTyped(json, false);
}

export function AccessRoleEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessRoleEnum {
    if ((<any>Object).values(AccessRoleEnumValues).includes(json)) {
        return {
            value: json as AccessRoleEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: AccessRoleEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function AccessRoleEnumToJSON(value?: AccessRoleEnum | null): JSONValue {
    return value && value.value != AccessRoleEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

