import { Button, Card, EmptyState, Layout, OptionList, Scrollable, TextField } from '@shopify/polaris'
import React, { useCallback, useEffect, useState } from 'react'
import AddCustomer from './AddCustomer';

/*

Things I am doing here:

* Sending an invitation to be among customers -> SurveySparrow API - here (done)
* Fetching a list of people who filled a survey -> SurveySparrow API - here (stuck - cors)
* Adding those people among my shopify Customers -> Shopify API - AddCustomer.js
* After adding a customer, deleting their response -> SurveySparrow API - AddCustomer.js

*/

function InviteCustomer() {
  const [email, setEmail] = useState('');
  const handleChange = useCallback((newValue) => setEmail(newValue), []);

  const url_sendInvite = 'https://api.surveysparrow.com/v1/shares/email/2244557'
  const url_getSubmissions = 'https://api.surveysparrow.com/v1/surveys/92595/submissions'
  const bearer = 'Bearer ' + 'pr0XQuLJrxoeXIiJ6fhDnp_pJ3QgHQ2-8jY2xTrjbfLx1Iv-iFn6KxNtGi01SRDDFWJUmDpNS8SnawQl97OGIMkA';

  const [selected, setSelected] = useState([]);
  useEffect(() => {
    console.log(selected)
  }, [selected])

  const requestOptions1 = {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearer,
    }
  };
  useEffect(() => {
    fetch(url_getSubmissions, requestOptions1)
      .then((res) => {
        console.log("Got the Customers to be added!\n", res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const requestOptions2 = {
    method: 'PUT',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearer,
    },
    body: JSON.stringify({
      "contacts": [email]
    })
  };

  const sendInvite = (e) => {

    e.preventDefault();
    console.log("Sending Customer Invite Mail...")

    if (email) {
      console.log(email)

      fetch(url_sendInvite, requestOptions2)
        .then((res) => {
          console.log("Customer Invite Mail Sent!")
        })
        .catch((err) => {
          console.log(err)
        })

      setEmail('');
    }
    else {
      console.log("You entered any email id")
    }
  };

  return (
    <>
      <EmptyState
        heading="Add a new Customer"
      >
        <form onSubmit={sendInvite}>
          <TextField
            label="Email id"
            value={email}
            onChange={handleChange}
            placeholder="Enter email id"
          />
          <Button submit primary>Share Survey</Button>
        </form>
      </EmptyState>

      <Layout >
        <Layout.Section oneHalf>

          <Card>
            <Scrollable shadow style={{ height: '300px' }}>
              <OptionList
                title="To be added among customers"
                onChange={setSelected}
                allowMultiple
                options={[
                  { label: 'BBN Frank', value: 'abhisheksrivastavabbn@gmail.com' },
                  { label: 'Sept Fifth', value: 'abhisheksrivastavasept5@gmail.com' },
                ]}
                selected={selected}
              />
            </Scrollable>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <EmptyState
            heading="Responses are mentioned here, select to add to them among Customers"
          >
            <AddCustomer />
          </EmptyState>
          {/* <ReviewForm customers={selected} setCustomers={setSelected} /> */}
        </Layout.Section>
      </Layout>
    </>
  )
}

export default InviteCustomer
