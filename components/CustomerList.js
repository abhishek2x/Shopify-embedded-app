import { Card, EmptyState, Layout, OptionList, Scrollable } from '@shopify/polaris';
import { gql } from 'apollo-boost';
import React, { useEffect, useState } from 'react'
import { Query } from 'react-apollo';
import Form from './Form';
import ReviewForm from './ReviewForm';

/*

* Getting List of existing Customers -> Shopify API - here (not done)

*/

const Get_10_Customers = gql`
  {
    customers(first: 10) {
      edges {
        node {
          id
          displayName
          email
        }
      }
    }
  }
`

function CustomerList() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(selected)
  }, [selected])


  return (
    <Query query={Get_10_Customers}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{ error.message }</p>;
        console.log(data)
        
        return data.customers.map(({ id, email, displayName }) => (
          <div key={id}>
            <p>{`${displayName} by ${email}`}</p>
          </div>
        ));
      }}
    </Query>
  );
}
export default CustomerList
