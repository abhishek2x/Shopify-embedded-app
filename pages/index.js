import React from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import CreateOrder from '../components/CreateOrder'
import CustomerList from "../components/CustomerList";
import InviteCustomer from "../components/InviteCustomer";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };

  render() {

    return (
      <Page>
        <TitleBar
          title="SurveySparrow App"
        />
        <EmptyState
          heading="Select products to start"
          action={{
            content: "Select products",
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />

        <ResourceListWithProducts />

        <hr />
        <CustomerList />
        <hr />
        <CreateOrder />
        <hr />
        <InviteCustomer />
      </Page>
    );
  } I
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set("ids", idsFromResources);
  };

}

export default Index;
