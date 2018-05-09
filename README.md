# Teamleader Ordering Coding-Test
I was asked to complete this React tech test as part of the recruitment process of teamleader.

Original coding challenge found here.
https://github.com/teamleadercrm/coding-test/blob/master/2-ordering.md

## Approach 
My approach to this challenge was:

**Planing**
Break the problems down into the small chance and write User Stories, identify the structure of the software and diagram.  
Then I estimated the length of time I would require to complete each of the user stories. 

**User Stories**

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

**Design**

I believe that this design is simple and separates the responsibilities of the various components. 
With ProductList and Order responsible for the view and app acting as model.  



			 App.js
			    |
			    |
	        _________________________
		|		       |
		|                      |
     ProductsList.js           Order.js



**Implementation**
For most of the User stories I was able to follow TDD and the red green refractor cycle. 
However, I did resort to spiking for the logic. 
 

## Setup and tests
**Install dependancies**

	npm install

**Local Server**

	npm start

**Run the test suit**

	npm tests

## Comment and possible extensions

### API
The instructions mention that the app should be able to plug in easily to a real API for the completion of an order. 
My present solution assumes that a successful http request would result in a conformation and failed http request would result in a failure. 
I understand that likely a post request would return some data and this returned data is what I could base the order confirmation on. 

### Application Data
My application starts with dummy data already saved as state. In a real application I think a network request would be made when liked to a lifecycle event of the application to populate this data. 

### Test Coverage
I think the test coverage for the components is good. However the unit tests for the business logic needs work.
I was a bit stumped with how to export the functions for unit testing. Its certainly an area that needs improvement. 

### Style
The look of the application is super basic. A bit of css would not hurt. 

