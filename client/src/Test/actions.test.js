import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
 getAllDogs,
 getNameDog,
 getTemperaments,
 getDetail,
 clearDetail,
  
} from "../Actions";


xdescribe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    dogs: [],
    filterDogs: [],
    temperaments: [],
    detail: [],
    favorites: []
  });

  beforeEach(() => store.clearActions());

  describe("getAllDogs", () => {
    it('Debería hacer un dispatch con las propiedades type "GET_ALL_DOGS" y como payload, el resultado del fetch al link provisto', async () => {
      return store.dogs
        .dispatch(getAllDogs())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].payload.length).toBe(174);
            expect(actions[0]).toEqual({
            type: "GET_ALL_DOGS",
            payload: response.data,
          });
        })
        .catch((err) => {
         console.error(err);
          expect(err).toBeUndefined();
        });
    });
  });
})
