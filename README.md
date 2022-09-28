# UberEatsClone

This project was made just to try the waters of React-Native. I watched https://www.youtube.com/watch?v=jmvbhuJXFow to get myself started. The project in the video did not have much of backend functionalities, it was intended to be a React-Native specific video and used firebase as the backend. I added my own backend (repo:https://github.com/shantanukorgaonkar/UberEatsClone-backend) using node Js and MongoDB.

I decided to take it up a level by adding simple user authentication using JWT and protecting certain api routes. I added a few more screens for User Sign Up/Login, Display list of orders , Display User Profile and more which the original project in the video did not have. 

The project uses a npm package called "react-native-autocomplete-input' which takes a google api key to render a list of places. If you're trying the project out you will have to use the 'react-native-dotenv' package to store your API key in an .env file for the autocomplete package to function correctly. 

The project also uses Yelp API to fetch a list of restaurants when provided with the city name.
