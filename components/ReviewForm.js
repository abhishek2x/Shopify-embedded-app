import { Button, EmptyState } from '@shopify/polaris'
import React from 'react'

// SurveySparrow API
function Form({ customers, setCustomers }) {

  const url = 'https://api.surveysparrow.com/v1/shares/email/2238842'
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

  const sendReviewForm = (e) => {

    e.preventDefault();
    console.log("Sending Review Form to Customers...")

    if (customers) {
      console.log(customers)

      fetch(url, requestOptions)
        .then((res) => {
          console.log("Review Form sent to Customers!")
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
      <form onSubmit={sendReviewForm}>
        <label for="name">Share Review Survey with Customers through emails</label>
        <br />
        <Button submit primary>Submit</Button>
      </form>
    </EmptyState>
  )
}

export default Form
