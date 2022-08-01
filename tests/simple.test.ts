import * as merge_sdk from '../src/index'
import { Configuration } from '../src/index';

// note this is skipped for CI, just here for reference
test.skip("can call account details api", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });
    let test_conf_crm = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });
    let test_conf_hris = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });
    let test_conf_ticketing = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });

    // accounting utility call
    let acct_api = new merge_sdk.ATS.AccountDetailsApi(test_conf)

    let response = await acct_api.accountDetailsRetrieve().catch((reason) => {
        console.log(reason);
    })
    console.log(response)

    expect(response).toBeDefined()

    // ats candidates call
    let cand_api = new merge_sdk.ATS.CandidatesApi(test_conf)

    let response2 = await cand_api.candidatesList({}).catch((reason) => {
        console.log(reason);
    })
    console.log(response2?.results)
    
    expect(response2).toBeDefined()

    // hris employees call w query
    let emp_api = new merge_sdk.HRIS.EmployeesApi(test_conf_hris)

    let response3 = await emp_api.employeesList({
        managerId: "REDACTED"
    })

    console.log(response3)
    expect(response3).toBeDefined()

    // crm call
    let con_api = new merge_sdk.CRM.ContactsApi(test_conf_crm)

    let response4 = await con_api.contactsList({
    })

    console.log(response4)
    expect(response4).toBeDefined()

    // ticketing call
    let tick_api = new merge_sdk.Ticketing.TicketsApi(test_conf_ticketing)

    let response5 = await tick_api.ticketsList({
    })

    console.log(response5)
    expect(response5).toBeDefined()

    // fetch next page of tickets
    expect(response5?.next).toBeDefined()

    let response6 = await tick_api.ticketsList({
        cursor: response5?.next as string
    })

    console.log(response6)
    expect(response6).toBeDefined()
    expect(response6?.previous).toBeDefined()
});