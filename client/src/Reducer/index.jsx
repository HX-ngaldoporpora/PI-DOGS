import {GET_ALL_DOGS, GET_NAME_DOG, GET_TEMPERAMENT, FILTER_BY_TEMPERAMENTS, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_DETAIL, POST_DOG, CLEAR_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE } from "../Actions"

const initialState = {
    dogs: [],
    filterDogs: [],
    temperaments: [],
    detail: [],
    favorites: []
}

function rootReducer(state = initialState, action) {
        switch (action.type){
            case GET_ALL_DOGS:
                return {
                    ...state,
                    dogs: action.payload,
                    filterDogs: action.payload
                }
            case GET_NAME_DOG:
                return {
                    ...state,
                    dogs: action.payload
                }
            case GET_TEMPERAMENT:
                return {
                    ...state,
                    temperaments : action.payload
                }
            case GET_DETAIL:
                return {
                    ...state,
                    detail : action.payload
                } 
            case CLEAR_DETAIL:
                return {
                    ...state,
                    detail : []
                }
            case ORDER_BY_NAME:
                let orderName = action.payload === "az" ? state.dogs.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0
                    
                }) : 
                state.dogs.sort (function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                }) 
                return {
                    ...state,
                    dogs : orderName
                }
            case ORDER_BY_WEIGHT:
                let orderWeight = action.payload === "asc" ? state.dogs.sort (function (a, b) {
                    if (a.min_weight > b.min_weight) {
                        return 1;
                    }
                    if (b.min_weight > a.min_weight) {
                        return -1;
                    }
                    return a.min_weight - b.min_weight;
                }) : 
                state.dogs.sort (function (a, b) {
                    if (a.min_weight > b.min_weight) {
                        return -1;
                    }
                    if (b.min_weight> a.min_weight) {
                        return 1
                    }
                    return 0;
                }) 
                           return {
                               ...state,
                              dogs : orderWeight
                           }
                
            case FILTER_BY_TEMPERAMENTS:
                const allDogs = state.filterDogs;
                const temperamentFilter = 
                action.payload === 'All' ? allDogs
                : allDogs.filter((e)=>
                e.temperament?.includes(action.payload))              
                return {
                    ...state,
                    dogs: temperamentFilter,
                }
            
            case FILTER_CREATED:
            const allDogsCreated = state.filterDogs
            const createdFilter = action.payload === 'created' ?
                allDogsCreated.filter((e) => e.createdInDataBase)
                : action.payload === 'api' ?
                allDogsCreated.filter((e) => !e.createdInDataBase)
                : action.payload === 'all' &&
                allDogsCreated
                      return {
                         ...state,
                           dogs: createdFilter,
            }
             case POST_DOG:
                    return {
                        ...state
                    }

            case ADD_FAVORITE:
                return{
                    ...state,
                    favorites : state.favorites.concat(action.payload)
                }
            case REMOVE_FAVORITE:
                return{
                    ...state,
                    favorites: state.favorites.filter(el => el.id !== action.payload)
                }
            default:
                    return state;  

        }
}
export default rootReducer
