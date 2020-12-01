import { Button, EmptyState } from '@shopify/polaris'
import React from 'react'

// Shopify API
function Form() {

  const url = 'https://embedded-game.myshopify.com/admin/api/2020-10/customers.json'

  const requestOptions = {
    method: 'GET',
    mode: 'no-cors',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': 'ae3cb5e86bd8d57567291d56426f12a8',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*'
    }
    // body: JSON.stringify({
    //   "draft_order": {
    //     "id": 719429238971,
    //     "note": "Customer contacted us about a custom engraving on this iPod"
    //   }
    // })
  };

  const createOrder = (e) => {
    e.preventDefault();
    console.log("Order Create Button clicked")
    fetch(url, requestOptions)
      .then((res) => {
        console.log(res)
        console.log("There you go...!")
      })
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
