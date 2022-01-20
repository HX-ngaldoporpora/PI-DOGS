import {GET_ALL_DOGS, GET_NAME_DOG, GET_TEMPERAMENT, DELETE, FILTER_BY_TEMPERAMENTS, FILTER_CREATED, ORDER_SORT,  GET_DETAIL, POST_DOG, CLEAR_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE, /*ORDER_BY_NAME, ORDER_BY_WEIGHT*/} from "../Actions"

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

                case ORDER_SORT:
                    if (action.payload === "default"){
                        return {
                            ...state,
                            dogs: state.dogs
                        }
                    }
                if (action.payload === "az") {
                    return {
                        ...state,
                        dogs: state.dogs.sort(function (a, b) {
                            if (a.name > b.name) {
                                return 1;
                            }
                            if (b.name > a.name) {
                                return -1;
                            }
                            return 0
                         }) 
                    }
                } 
                if (action.payload === "za"){
                    return{
                        ...state,
                        dogs: state.dogs.sort (function (a, b) {
                            if (a.name > b.name) {
                                return -1;
                            }
                            if (b.name > a.name) {
                                return 1
                            }
                            return 0;
                        }) 
        
                    }
                }
               if(action.payload === "asc" ){
                   return {
                       ...state,
                       dogs: state.dogs.sort (function (a, b) {
                        if (a.max_weight > b.max_weight) {
                            return 1;
                        }
                        if (b.max_weight > a.max_weight) {
                            return -1;
                        }
                        return 0                        
                    }) 
                   }
               }
               if(action.payload === "desc"){
                   return {
                       ...state,
                       dogs: state.dogs.sort (function (a, b) {
                        if (a.max_weight > b.max_weight) {
                            return -1;
                        }
                        if (b.max_weight> a.max_weight) {
                            return 1
                        }
                        return 0;
                    }) 
                  }
               }
               else{
                   return {
                       ...state,
                   }
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
         case DELETE:
             return {
                 ...state,
                 dogs: state.dogs.filter(el => el.id !== action.payload)
             }

            case ADD_FAVORITE:
                return{
                    ...state,
                    favorites : [...state.favorites, action.payload]
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

 
 

                /*case ORDER_BY_NAME:
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
                    if (a.max_weight > b.max_weight) {
                        return 1;
                    }
                    if (b.max_weight > a.max_weight) {
                        return -1;
                    }
                    return 0
                    //return a.max_weight - b.max_weight;
                }) : 
                state.dogs.sort (function (a, b) {
                    if (a.max_weight > b.max_weight) {
                        return -1;
                    }
                    if (b.max_weight> a.max_weight) {
                        return 1
                    }
                    return 0;
                }) 
                           return {
                               ...state,
                              dogs : orderWeight
                           }*/
                
