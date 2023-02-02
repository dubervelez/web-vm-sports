import axios from 'axios'

export const getLeaderboard = async(callbackSucces, callbackError)=>{
    const options = {
        method: 'GET', 
        url: 'http://localhost:5000/leaderboard'
    }

    await axios.request(options).then(callbackSucces).catch(callbackError)

}