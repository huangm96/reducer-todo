export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about java",
    completed: false,
    id: 3892987600
  },
  {
    item: "Learn about Node.js",
    completed: false,
    id: 3992387290
  },
  {
    item: "Learn about python",
    completed: false,
    id: 3892997900
  }
];

export const todoListReducer = (state, action) => {
  switch (action.type) {
      case "ADD_TODO":
          console.log(state);
          return  [
              { item: action.payload, completed: false, id: new Date() },
               ...state
           ]
          
      case "TOGGLE_COMPLETED":
          
          let completedItem = state.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        return completedItem;
      case "CLEAR_COMPLETED":
          
          return state.filter(item => {
            return item.completed === false;
          });
          
    default:
      return state;
  }
};
