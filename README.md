# Teamleader Ordering Coding-Test
I was asked to complete this React tech test as part of the recruitment process of teamleader.

## User Stories

	As a customer,
	so that I can order an item,
	I want to be able to see a list of all the products.

	As a customer,
	so that I can order an item,
	I want to be able to add an item to my order.

	As a customer,
	so that I know what I am ordering,
	I want to be able to see the details of my order.

	As a customer,
	so that I can remove unnecessary products,
	I want to be able to remove items from the order.

	As a customer,
	so that I know if an order was successful,
	I want to receive a conformation of success or failure.

## Setup and tests
Install dependancies
npm install

Local Server
npm start

Run the test suit
npm test

## Comments

### API
Twice in the orginal instruction it was mentioned that I should ensure that the application should easily plug in the real api.

Firstly with regard to the customer data and product list.
I think that making some network requests for the initial data both products and customer data during the life cycle method componentDidMount. I have ensured that the data structure is maintained in my dummy data.

Secondly for sending a http request to a server to confirm an order.
In this case I assume that a sucessful http request would result in a conformation and failed http request would result in a failure.

Hopefully, I have understood the instructions correctly.
