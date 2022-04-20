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

export enum MaritalStatusEnumExpected {
    Single = <any> 'SINGLE',
    MarriedFilingJointly = <any> 'MARRIED_FILING_JOINTLY',
    MarriedFilingSeparately = <any> 'MARRIED_FILING_SEPARATELY',
    HeadOfHousehold = <any> 'HEAD_OF_HOUSEHOLD',
    QualifyingWidowOrWidowerWithDependentChild = <any> 'QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD'
}

export type MaritalStatusEnum = MaritalStatusEnumExpected | string;
