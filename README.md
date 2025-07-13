# The Modern Newspaper

**The Modern Newspaper** is a news website, displaying the latest news fetched from an external api.

Visit here: https://modernewspaper.lcslicp.xyz

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

This application integrates with two external APIs. You will need API keys to use them:
- [News API](https://newsapi.org/)
- [API Ninjas](https://www.api-ninjas.com)

#### Steps:

1. Get your API keys:

- [News API](https://newsapi.org/register)
- [Sudoku API](https://www.api-ninjas.com/api/sudoku) 

2. Create `.env` file in the the project root.
3. Add your API keys and port number in the .env file:


```
API_KEY=samplekeyfromnewsapi
SODOKU_KEY=samplekeyfromapininjas
PORT=5000
```


### API Limits

News API's free tier plan only allows up to 100 requests per day. When the limit exceeds, the page will no longer be able to display data from the api for a certain time period. 

### Production

To create production-ready build, run the command:

```
pnpm run build
```

Check the `package.json` file and make sure the scripts are configured correctly.

### Resources

1. [NewsAPI docs](https://newsapi.org/docs)
2. [Sudoku API docs](https://www.api-ninjas.com/api/sudoku)
3. [React docs](https://beta.reactjs.org/)
4. [TypeScript](https://www.typescriptlang.org/docs/)
5. [pnpm](https://pnpm.io/motivation)
6. [Node.js](https://nodejs.org/en/docs/)
7. [Webpack](https://webpack.js.org/)
