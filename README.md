# Shopify-embedded-app

## Pre-requisited

* [Create a Shopify partner account](https://partners.shopify.com/signup).
* Create an App in [Shopify Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
* In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.
* Survey Sparrow Account
* ngrok installed
* Node runtime environment with dependencies installed

> In our case, store is **embedded-game** and app is **Sample Embedded App**.

## Setting up the Environment

* On First Ternimal
  * run: `npm start dev`
* On Second Terminal
  * run: `ngrok http 3000`

<img src="images/terminal.png" ></img>

* Copy the ngrok gateway address and add it in shopify app setup. 

<img src="images/ngrok.png" ></img>
[**Note**: Shopigy only uses https]


* Your app will run on:<br/>
Link: 
`https://<ngrok_gateway>.ngrok.io/auth?shop=<app_name>.myshopify.com`
<br/> <br/>In our case: <br/>
`https://87319a0c345a.ngrok.io/auth?shop=embedded-game.myshopify.com`

***


## SurveySparrow **><** Shopify

<div>
<img src="images/logo.png" width=200px"></img>
<img src="images/logo3.png" width=200px"></img>
</div>

***

## Images 
### Embedded app inside Shopify

<img src="images/embedded.png"></img>

### Stand-alone app

<img src="images/unembedded.png"></img>

### Order Selector

<img src="images/picker.png"></img>

## Converting Embedded to Non-Embedded App

An embedded app appears within the Shopify environment through an iframe and should be an organic experience for the user. A non-embedded app is one that is external and to which you are re-directed to when clicking on the app in the `admin/apps` section

To convert Embedded to Non-Embedded App, we only have to change ***forceRedirect*** key in **config** file in **_app.js**.

<img src="images/conversion.png"></img>

## Adding SurveySparrow in embedded app
Option to add our compant logo is avaliable in shopify app setup. 

<img src="images/app_logo.png"></img>

## Use cases

* **Authentication** Fuctionality at:*https://<ngrok_gateway>/auth?shop=embedded-game.myshopify.com*
* Once logged in, you'll be inside your app (which can be *embedded using iframe*).
* In your app, you can use *GraphQL API* to perform **CRUD operations** on **Products, customers, orders, etc.**
* The input fields for above operations can be taken using **SurveySparrow conversational forms**
* Listen for store events with webhooks. We can implement webhooks to trigger at a specific event and notify users of the same. 

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
