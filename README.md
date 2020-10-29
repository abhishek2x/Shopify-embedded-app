# Shopify-embedded-app

## Use cases

* **Authentication** Fuctionality at: https://<ngrok_gateway>/auth?shonp=embedded-game.myshopify.com
* Once logged in, you'll be inside your app (which can be *embedded using iframe*).
* In your app, you can use *GraphQL API* to perform **CRUD operations** on **Products, customers, orders, etc.**
* The input fields for above operations can be taken using **SurveySparrow conversational forms**
* Listen for store events with webhooks. We can implement webhooks to trigger at a specific event and notify users of the same. 

## Images 

### Embedded app inside Shopify

<img src="images/embedded.png"></img>

### Stand-alone app

<img src="images/unembedded.png"></img>

### Functionality

<img src="images/picker.png"></img>

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.
- If you don’t have one, [create a Survey Sparrow account]

***

## Technology Stack

- React
- Next.js 
- Appolo-GraphQL
- Shopify Tools
  - shopify/app-bridge-react
  - shopify/koa-shopify-auth
  - shopify/koa-shopify-graphql-proxy
  - shopify/polaris
  
***
  
## License

This respository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
