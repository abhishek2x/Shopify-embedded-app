import { Card, EmptyState, Layout, OptionList, Scrollable } from '@shopify/polaris';
import React, { useEffect, useState } from 'react'
import Form from './Form';
import ReviewForm from './ReviewForm';

function CustomerList() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <Layout >
      <Layout.Section oneHalf>
        <EmptyState>
          <Card>
            <Scrollable shadow style={{ height: '300px' }}>
              <OptionList
                title="Customers"
                onChange={setSelected}
                allowMultiple
                options={[
                  { label: 'BBN Frank', value: 'abhisheksrivastavabbn@gmail.com' },
                  { label: 'Sept Fifth', value: 'abhisheksrivastavasept5@gmail.com' },
                  { label: 'Londer Sept', value: 'abhisheksrivastava29sept@gmail.com' },
                  { label: 'V technology', value: 'abhishek.srivastava2019@vitbhopal.ac.in' },
                  { label: 'Survey Player', value: 'abhishek.srivastava@surveysparrow.com' },
                ]}
                selected={selected}
              />
            </Scrollable>
          </Card>
        </EmptyState>
      </Layout.Section>
      <Layout.Section oneHalf>
        <Form customers={selected} setCustomers={setSelected} />
        <ReviewForm customers={selected} setCustomers={setSelected} />
      </Layout.Section>
    </Layout>
  );
}
export default CustomerList
