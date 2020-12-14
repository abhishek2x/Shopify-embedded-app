import { Card, EmptyState, Layout, OptionList, Scrollable } from '@shopify/polaris';
import { gql } from 'apollo-boost';
import React, { useEffect, useState } from 'react'
import { Query } from 'react-apollo';
import Form from './Form';
import ReviewForm from './ReviewForm';
import {
  ResourceList,
  Stack,
  TextStyle,
} from "@shopify/polaris";

/*

* Getting List of existing Customers -> Shopify API - here (done)

*/


const GET_CUSTOMERS = gql`
query getCustomers {
    customers (first: 10) {
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
    console.log("To send Review Form => \n", selected)
  }, [selected])


  return (
    <Query query={GET_CUSTOMERS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.message}</p>;

        // return data.customers.edges.map(edge => (
        //   <div key={edge.node.id}>
        //     <p>{`${edge.node.displayName} by ${edge.node.email}`}</p>
        //   </div>
        // ));

        let label = [];
        let value = [];

        label = data.customers.edges.map(edge => (
          edge.node.displayName
        ));
        value = data.customers.edges.map(edge => (
          edge.node.email
        ));

        var arrayOfObject = label.map(function (v, index){
           return {
             label: v, 
             value: value[index]}
        });

        return (
          <Layout >
            <Layout.Section oneHalf>
              <EmptyState>
                <ReviewForm customers={selected} setCustomers={setSelected} />
              </EmptyState>
            </Layout.Section>

            <Layout.Section oneHalf>

              <Card>
                <Scrollable shadow style={{ height: '300px' }}>
                  <OptionList
                    title="To be added among customers"
                    onChange={setSelected}
                    allowMultiple
                    options={arrayOfObject}
                    selected={selected}
                  />
                </Scrollable>
              </Card>
            </Layout.Section>
          </Layout>
        )
      }}
    </Query>
  );
}

export default CustomerList
