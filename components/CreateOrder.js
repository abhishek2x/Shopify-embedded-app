import { Button, EmptyState } from '@shopify/polaris'
import React from 'react'


/*

* Creating Order using Shopify API - here (not done)

*/

function Form() {
  const url = 'https://embedded-game.myshopify.com/admin/api/2020-10/draft_orders.json'


  const requestOptions = {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': 'ae3cb5e86bd8d57567291d56426f12a8',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      "draft_order": {
        "line_items": [
          {
            "custom": false,
            "title": "Custom Product",
            "product_id": 4008421883976,
            "price": "1000.00",
            "properties": [
              {
                "name": "custom engraving",
                "value": "Happy Birthday Mom!"
              }
            ],
            "quantity": 5
          }
        ],
        "customer": {
          "id": 1000
        },
        "email": "abhisheksrivastavabbn@gmail.com"
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
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <EmptyState
      heading="Create Order"
    >
      <form onSubmit={createOrder}>
        <Button submit primary>Create a new Draft Order</Button>
      </form>
    </EmptyState>
  )
}

export default Form
