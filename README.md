# Now News

Now News is a news website, displaying the latest news fetched from a news api. Visit here: https://news-ts.vercel.app/

#### Tech Stack

Frontend: React, Typescript
Backend: Node.js, JavaScript, express

#### Dependencies

The following dependencies are required to run this project:

- axios: ^1.2.5
- cors: ^2.8.5
- dotenv: ^16.0.3
- dotenv-webpack: ^8.0.1
- express: ^4.18.2
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.8.0

To install all the required dependencies, you can run the following command:

`pnpm install`

#### External API

This application consumes an external API: [News API](https://newsapi.org/). You need an **API key** to use the API.

1. Get your [API key](https://newsapi.org/register) from News API.
2. Create .env file in the root directory.
3. Inside the .env you created, define your API key.

 `API_KEY=samplekeyfromnewsapi`

#### API Limits

News API's free tier plan only allows up to 100 requests per day. When the limit exceeds, the page will no longer be able to display data from the api for a certain time period. As a fallback, a Demo Website(under development) is provided which only displays placeholder content. 

#### Production

To create production-ready build, run the command:

`pnpm run build`

Make sure to check the package.json if the scripts are configured correctly.

#### Resources

1. [NewsAPI docs](https://newsapi.org/docs)
2. [React docs](https://beta.reactjs.org/)
3. [TypeScript](https://www.typescriptlang.org/docs/)
4. [pnpm](https://pnpm.io/motivation)
5. [Node.js](https://nodejs.org/en/docs/)
6. [Webpack](https://webpack.js.org/)
