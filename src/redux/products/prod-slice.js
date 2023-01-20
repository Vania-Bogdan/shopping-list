import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: {
            reducer: (store, { payload }) => {
                store.push(payload )
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    }
                }
            }
        },
        removeProduct: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer