import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Gender = "male" | "female" | "other" | "";

export interface Customer {
  customerId: string;
  fullName: string;
  gender: Gender;
  age: number;
}

const customerInitialState: Customer[] = [];

const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  reducers: {
    createCustomer(state, action: PayloadAction<Customer>) {
      const isCustomerExists = state.some((custmr) => custmr.customerId === action.payload.customerId);
      if (isCustomerExists) return;

      state.push(action.payload);
    },
  },
});

export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;

// // 🚫 OLD  Approach 🚫

// interface CreateCustomerAction {
//   type: "customer/create";
//   payload: Customer;
// }

// // Reducer for customer actions
// export function customerReducer(state: Customer[] = customerInitialState, action: CreateCustomerAction): Customer[] {
//   switch (action.type) {
//     case "customer/create":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// }

// // Action creator for creating a new customer
// export function createCustomer(payload: Customer): CreateCustomerAction {
//   return { type: "customer/create", payload };
// }
