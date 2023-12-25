# Project - *eCommerce*

How to start project:

- clone API repo
- run yarn install
- run yarn start
- this stage the BE is work to test
- clone FE repo
- run yarn install
- run yarn dev
- use postman to send the request to API with the bellow info:
  + URL: http://localhost:8080/product
  + method: POST
  + body: {
    "name": "A Book",
    "price": "$5",
    "qty": "88",
    "img": "path-to-image"
  }
  + then reload FE side

In FE side I have done:
- search
- sort
- show row content
- load data and show to the table