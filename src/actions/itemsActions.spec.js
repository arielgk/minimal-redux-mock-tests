import * as itemsActions from "./itemsActions";
import * as actionTypes from "./actionTypes";
import configureMockStore from "redux-mock-store";
import nock from "nock";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("async Item Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it("should return redux action success", () => {
    //https://redux.js.org/recipes/writingtests#async-action-creators
    // for real REST
    // nock('http://localhost:8000')
    //.get('/api/items')
    // reply(200,{body:[{id:1,title:"Item q"}]});

    const expectedAction = [
      {
        items: [{ id: 1, title: "Item 1" }],
        type: actionTypes.GET_ITEMS_SUCCESS
      }
    ];

    const store = mockStore({ items: [] }, expectedAction);
    return store.dispatch(itemsActions.getItems()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(expectedAction[0].type);
    });
  });
});
