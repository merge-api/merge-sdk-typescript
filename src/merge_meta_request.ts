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

/**
 * 
 * @export
 * @interface MergeMetaRequest
 */
export interface MergeMetaRequest {
    misc_params_query: { [key: string]: string }
}


