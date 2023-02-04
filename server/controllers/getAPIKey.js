import dotenv from 'dotenv'
dotenv.config()


export const getAPIKey = (req, res) => {
    const apiKey = process.env.API_KEY;
    res.send({apiKey});
}