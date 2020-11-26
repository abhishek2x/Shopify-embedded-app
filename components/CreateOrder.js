import { Button, EmptyState } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'

function Form() {

  const url = 'https://embedded-game.myshopify.com/admin/api/2020-10/orders.json'
  const bearer = 'Bearer ' + 'pr0XQuLJrxoeXIiJ6fhDnp_pJ3QgHQ2-8jY2xTrjbfLx1Iv-iFn6KxNtGi01SRDDFWJUmDpNS8SnawQl97OGIMkA';

  const requestOptions = {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearer,
    },
    body: JSON.stringify({
      "draft_order": {
        "line_items": [
          {
            "title": "Custom Tee",
            "price": "20.00",
            "quantity": 2
          }
        ],
        "applied_discount": {
          "description": "Custom discount",
          "value_type": "fixed_amount",
          "value": "10.0",
          "amount": "10.00",
          "title": "Custom"
        },
        "customer": {
          "id": 4434849562811
        },
        "use_customer_default_address": true
      }
    })
  };

  const createOrder = (e) => {
    e.preventDefault();
    console.log("Order Create Button clicked")
    fetch(url, requestOptions)
      .then(
        console.log("Order Created!!")
      )
    // .catch((err) => {
    //     console.log(err)
    // })
  }

  return (
    <EmptyState
      heading="Create Order"
    >
      <form onSubmit={createOrder}>
        <button type="submit">Create a Draft Order</button>
        {/* <Button type="submit"></Button> */}
      </form>
    </EmptyState>
  )
}

export default Form
