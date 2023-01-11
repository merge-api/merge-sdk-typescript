/* tslint:disable */
/* eslint-disable */
/**
 * Merge API
 * The unified API for building rich integrations with multiple 3rd party platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 * 
 * This base request model class exposes an arbitrary string:string mapping for query and body
 * parameters, which allows for forwards-compatibility as new query parameters come out that
 * customers may optionally want to use.
 *
 */

import { exists, mapValues } from './runtime';
import { JSONValue } from './merge_json'

/**
 * 
 * @export
 * @interface MergeRequestModelBase
 */
export interface MergeRequestModelBase {
    misc_params_query?: { [key: string]: string }
    misc_params_body?: { [key: string]: string }
    misc_params_header?: { [key: string]: string }
}


