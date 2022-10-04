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
