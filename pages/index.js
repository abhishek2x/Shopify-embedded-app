import React, { useCallback } from "react";
import { EmptyState, Layout, Modal, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import { VariablesAreInputTypesRule } from "graphql";
import Form from '../components/Form'
import ReviewForm from '../components/ReviewForm'

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };

  render() {
    const emptyState = !store.get("ids");

    return (
      <Page>
        <TitleBar
          title="SurveySparrow App"
          primaryAction={{
            content: "Send Surveys",
            onAction: () => this.setState({ on: true }),
          }}
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
            <>
              <Modal
                activator={`<Button onClick={handleChange}>Open</Button>`}
                open={true}
                onClose={handleChange}
                title="Reach more shoppers with Instagram product tags"
                primaryAction={{
                  content: 'Add Instagram',
                  onAction: handleChange,
                }}
                secondaryActions={[
                  {
                    content: 'Learn more',
                    onAction: handleChange,
                  },
                ]}
              ></Modal>
              <ResourceListWithProducts />
            </>
          )}

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
