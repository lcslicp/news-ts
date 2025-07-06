import dotenv from 'dotenv'
import axios from 'axios';
dotenv.config()

const sodokuKey = process.env.SODOKU_KEY;
let currentPuzzle;
let currentSolution;

export const getSodokuData = async (req, res) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/sudokugenerate', {
            headers: {
                'X-Api-Key': sodokuKey
            },
            params: {
                width: 3,
                height: 3,
                difficulty: 'medium',
            }
        })
        currentPuzzle = response.data;
        currentSolution = currentPuzzle.solution;

        console.log('Puzzle:', response.data.puzzle);
        console.log('Solution:', response.data.solution);
        res.json (response.data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Sodoku from API'})
    }
}

export const checkAnswer = (req, res) => {
    try {
        const { userSolution } = req.body;

        if (!Array.isArray(userSolution) || userSolution.length === 0) {
            return res.status(400).json({
                correct: false,
                message: 'Something went wrong. 🫠'
            })
        }

        const isCorrect = userSolution.every((row, rowIndex) => row.every((num, colIndex) => num === currentSolution[rowIndex][colIndex]))

        res.json({
            correct: isCorrect,
            message: isCorrect ? 'You got it right! 🥳' : 'Hmm... not quite right. 😬',
            button: isCorrect ? 'Generate New Puzzle' : 'Try Again',
        })

    console.log(currentSolution);

    } catch(error) {
        console.error(error);
        res.status(500).json({
            correct: false,
            message: 'Uh oh, something went wrong on the server. 🫣',
            button: 'Refresh & try again'
        })
    }

}

export const generateNewPuzzle = () => {

}