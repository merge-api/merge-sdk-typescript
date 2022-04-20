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

export enum EmploymentTypeEnumExpected {
    FullTime = <any> 'FULL_TIME',
    PartTime = <any> 'PART_TIME',
    Intern = <any> 'INTERN',
    Contractor = <any> 'CONTRACTOR',
    Freelance = <any> 'FREELANCE'
}

export type EmploymentTypeEnum = EmploymentTypeEnumExpected | string;