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
        default:
            return state;
    }
}