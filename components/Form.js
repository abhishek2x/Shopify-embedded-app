import { Button, EmptyState } from '@shopify/polaris'
import React from 'react'

/*

* Sharing order survey with the selected customers -> SurveySparrow API - here (done)

*/

function Form({ customers, setCustomers }) {

  const url = 'https://api.surveysparrow.com/v1/shares/email/2238828'
  const bearer = 'Bearer ' + 'pr0XQuLJrxoeXIiJ6fhDnp_pJ3QgHQ2-8jY2xTrjbfLx1Iv-iFn6KxNtGi01SRDDFWJUmDpNS8SnawQl97OGIMkA';
  const requestOptions = {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearer,
    },
    body: JSON.stringify({
      "contacts": customers
    })
  };

  const sendMail = (e) => {

    e.preventDefault();
    console.log("Sending Mail to Customers...")

    if (customers) {
      console.log(customers)

      fetch(url, requestOptions)
        .then((res) => {
          console.log("Order taking form sent to Customers!")
        })
        .catch((err) => {
          console.log(err)
        })

      setCustomers([]);
    }
    else {
      console.log("You haven't selected any customers")
    }
  };

  return (
    <EmptyState >
      <form onSubmit={sendMail}>
        <label for="name">Share Survey through emails</label>
        <br />
        <Button submit primary>Submit</Button>
      </form>
    </EmptyState>
  )
}

export default Form;
