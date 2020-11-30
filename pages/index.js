import React, { useCallback } from "react";
import { EmptyState, Layout, Modal, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import { VariablesAreInputTypesRule } from "graphql";
import Form from '../components/Form'
import ReviewForm from '../components/ReviewForm'
import CreateOrder from '../components/CreateOrder'

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };

  render() {
    const emptyState = !store.get("ids");

    return (
      <Page>
        <TitleBar
          title="SurveySparrow App"
        // primaryAction={{
        //   content: "Send Surveys",
        //   onAction: () => this.setState({ open: true }),
        // }}
        />
        {/* <h1>hEKKI</h1> */}
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        { emptyState ? (
          <Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: "Select products",
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products and change their price.</p>
              <sendSurvey />
            </EmptyState>
          </Layout>
        ) : (
            <ResourceListWithProducts />
          )}

        <CreateOrder />
        <Form />
        <ReviewForm />
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set("ids", idsFromResources);
  };

}

export default Index;
