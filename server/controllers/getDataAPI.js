import axios from 'axios';

export const getHeadlinesFromAPI = async (req, res) => {
    const { q, lang, sort_by, page } = req.query;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.get('https://api.newscatcherapi.com/v2/latest_headlines?countries=PH',{ 
    headers: {
        'x-api-key': apiKey
        }
    });

    res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from API' });
    }
}

export const getDataFromAPI = async (req, res) => {
    const { q, lang, sort_by, page } = req.query;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.get('https://api.newscatcherapi.com/v2/search',{ 
        params: {
            q,
            lang,
            sort_by,
            page
        },
    headers: {
        'x-api-key': apiKey
        }
    });

    res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from API' });
    }
}
