# Now News

Now News is a news website, displaying the latest news fetched from an external api.

Visit here: https://nownews.lcslicp.dev/

Demo site:
https://nownewsdemo.lcslicp.dev

Note: A demo site is provided for viewing when API calls are exhausted for the day.

### Tech Stack

- Frontend: React, Typescript
- Backend: Node.js, JavaScript, express

### Dependencies

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

```
pnpm install
```

### External API & ENV variables

This application consumes an external API: [News API](https://newsapi.org/). You need an **API key** to use the API.

1. Get your [API key](https://newsapi.org/register) from News API.
2. Create `.env` file in the root directory.
3. Inside the `.env` file you created, define your API key.

```
API_KEY=samplekeyfromnewsapi
```

1. Define `PORT` in the `.env` file as well.

```
PORT=5000
```

### API Limits

News API's free tier plan only allows up to 100 requests per day. When the limit exceeds, the page will no longer be able to display data from the api for a certain time period. As a fallback, a [Demo Website](https://nownewsdemo.netlify.app) is provided which only displays placeholder content. 

### Production

To create production-ready build, run the command:

```
pnpm run build
```

Check the `package.json` file and make sure the scripts are configured correctly.

### Resources

1. [NewsAPI docs](https://newsapi.org/docs)
2. [React docs](https://beta.reactjs.org/)
3. [TypeScript](https://www.typescriptlang.org/docs/)
4. [pnpm](https://pnpm.io/motivation)
5. [Node.js](https://nodejs.org/en/docs/)
6. [Webpack](https://webpack.js.org/)
