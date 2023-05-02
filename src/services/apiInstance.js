import axios from 'axios'


const apiInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})



export const getPokemons = ()=>{
    return apiInstance({
        url:'/pokemon?limit=200&offset=0',
        method: 'GET'
    })
}

