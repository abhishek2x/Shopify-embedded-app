import { Card, EmptyState, OptionList, Scrollable } from '@shopify/polaris';
import React, { useEffect, useState } from 'react'
import Form from './Form';
import ReviewForm from './ReviewForm';

function CustomerList() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <EmptyState>
      <Card>
        <Scrollable shadow style={{ height: '400px' }}>
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
      <Form customers={selected} setCustomers={setSelected} />
      <ReviewForm customers={selected} setCustomers={setSelected} />
    </EmptyState>
  );
}
export default CustomerList
