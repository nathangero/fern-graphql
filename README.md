# fern-graphql

## Description

The purpose of this repo is to combine React with Firebase and GraphQL. This is a proof of concept of using GraphQL to access Firebase's Realtime Database. This was acheived through Vite, Firebase's serverless functions, Firebase Hosting and Apollo Server.

You can visit the Firebase hosted link here: [https://fern-graphql-tester.web.app/](https://fern-graphql-tester.web.app/)

### Technologies Used

| Tech | Reference |
| :---- | :----: |
| Vite | [docs](https://vitejs.dev/) |
| Firebase Functions | [docs](https://firebase.google.com/docs/functions) |
| Firebase Hosting | [docs](https://firebase.google.com/docs/hosting) |
| Apollo Server | [docs](https://www.apollographql.com/docs/) |


## How Did I Do It?

**Disclamer**: I used Node/npm for all of this.

First, have Node installed on your computer so you can use `npm` commands.

### Setup React

I setup React with the `npm create vite@latest` command. After typing in a project name, I selected `React` for my framework, and finally I chose `JavaScript` (**not** JavaScript + SWC in my case).

talk about packages I used

### Connect to Firebase

Going to firebase website

### Deploy to Firebase Hosting

after creating a firebase project, follow the instructions to add a website

### Setup Firebase Function with GraphQL

show file structure.

apollo website help and youtube video.

break down Resolver class

### Connect React to GraphQL

Using `@apollo/client` package for gql hooks

Setting the firebase function url to the apollo client uri

## Learning Points



## Images



## Credits 

[Maksim Ivanov's YouTube Firebase with GraphQL video](https://www.youtube.com/watch?v=I5irZ0AAr98)

## Resources

[Apollo Server for node](https://www.apollographql.com/docs/apollo-server/v3/integrations/middleware/#apollo-server-express)

[Apollo Server GraphQL for Google Cloud Functions](https://www.apollographql.com/docs/apollo-server/v3/integrations/middleware/#apollo-server-cloud-functions)