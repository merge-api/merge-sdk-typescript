# Version 3.0.0

# Date: 2022-01-13

- Changed Expands enum options from a combinatoric list of strings with fixed order to an orderless array
- Added `misc_params_query` to all *MetaPost and *MetaPatch requests, to allow for flexibility since those endpoints have various integration-specific query parameters.
- increased `highwatermark` setting in case node-fetch is used, see: 
- added new enum handler, which exposes both the standard deserialized merge enum as well as the raw string value if none match

# Version 2.0.6

## Date: 2022-12-29

- Added MERGE_NONSTANDARD_VALUE to all enums as the default deserialization option
- Added scopes api models and methods (beta)
- Added Ticketing category Collection model (replaces Project model gradually, both supported still)

# Version 2.0.5

## Date: 2022-12-05

- Several new query parameters for filtering our Ticketing category models
- Almost all Accounting category models have a `companyId` property now, given its widespread use
- Clarified the usage of `normalize_response` optional query param in passthrough apis
- Patch capability for the Accounting category `Account` model
- Various other minor backwards-compatible model/api tweaks

# Version 2.0.4

## Date: 2022-11-02

- `integration_params` and `linked_account_params` properties have long been a part of our POST endpoints but were missing from HRIS, Accounting and Ticketing model definitions. They are now usable.
- New query params for Ticketing category list tickets endpoint and list user endpoints. See docs.merge.dev for a full list.
- BETA - selective sync is Merge's upcoming feature to limit the amount of data ingested by dynamically setting query params or request properties to integrations to filter before it reaches Merge. This feature is under active development but the initial models are in this version. Subject to (likely minor) change. Feature limited by plan, consult your customer success contact before using.

# Version 2.0.3

- Adds the expands functionality, for certain API calls (refer to docs.merge.dev), you can add `expand: ENUM_VALUE` to change a flat id to a full sub object
- Fields that are expanded are returned as merge_sdk.JSONValue type, if you wish to deserialize it to that type you can use the `MODEL_NAMEFromJSON(raw_json_value)` methods, i.e. `CandidateFromJSON` or `EmployeeFromJSON`

# Version 2.0.2

- Build issues discovered by a customer that were patched, thank you @james-langille
- Fix readme version

# Version 2.0.1

## Date: 2022-08-02

- Update README with examples of usage for each of the categories in this sdk
- Add ATS.ApplicationsApi `applicationsChangeStageCreate` method, which updates a candidate's application from one stage to another (i.e. phone screen -> onsite)

# Version 2.0.0

## Date: 2022-07-29

- Move away from OpenAPI Generator's `typescript` generator in favor of `typescript-fetch`, which is a different set of templates that uses the js `fetch` api to make requests
- Change API classes to use request models instead of having individual params in method calls
- Instead of each category having duplicates of base api classes, pagination and remote_data we now share them
- Remove `Paginated___List` models in favor of using generics (`MergePaginatedResponse<T>`)
- Remove uses of `any` in favor of `JSONValue`, a type which matches the json language spec (albeit with `undefined` and `null` as possible values)
- add an example simple-test which calls an api from each category. Redact sensitive values.

---

# Version 1.0.1

## Date: 2022-04-22

- initial commit
