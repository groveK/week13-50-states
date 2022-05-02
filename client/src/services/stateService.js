import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateVisited, visited) {
        return axios.patch(`/api/state/${stateName}`, {visited: visited}).then( response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then(response =>{
            return response.data
        })
    }
}