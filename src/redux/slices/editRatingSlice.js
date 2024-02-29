import { createSlice } from "@reduxjs/toolkit"

const editRatingSlice = createSlice ({

    name: "rating",
    initialState :{}
    ,
    reducers: {
        setRating(state, action){
            state.rating=action.payload; 
        }
    }
})

export const {setRating} = editRatingSlice.actions
export default editRatingSlice.reducer