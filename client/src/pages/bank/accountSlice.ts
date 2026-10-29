import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Account {
  customerId: string;
  total: number;
  deposite: number[];
  withdraw: number[];
  loanAmount: number;
}

interface DeplositPayload {
  deposite: number;
  customerId: string;
}

interface WithdrawPayload {
  withdrawAmount: number;
  customerId: string;
}

interface GetLoanPayload {
  loanAmount: number;
  customerId: string;
}

const accountInitialState: Account[] = [
  { customerId: "hska79", total: 0, deposite: [0], withdraw: [0], loanAmount: 0 },
];

const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    deposit(state, action: PayloadAction<DeplositPayload>) {
      const account = state.find((acc) => acc.customerId === action.payload.customerId);
      if (!account) return;

      account.deposite.push(action.payload.deposite);
      account.total = account.total + action.payload.deposite;
    },
    withdraw(state, action: PayloadAction<WithdrawPayload>) {
      const account = state.find((acc) => acc.customerId === action.payload.customerId);
      if (!account) return;
      account.withdraw.push(action.payload.withdrawAmount);
      account.total = account.total - action.payload.withdrawAmount;
    },
    getLoan(state, action: PayloadAction<GetLoanPayload>) {
      const account = state.find((acc) => acc.customerId === action.payload.customerId);
      if (!account) return;
      account.loanAmount += action.payload.loanAmount;
      account.total += action.payload.loanAmount;
    },
  },
});

export const { deposit, withdraw, getLoan } = accountSlice.actions;
export default accountSlice.reducer;

// Async thunk: the component dispatches this with the original amount. The thunk does the async
// work (fetching the rate), then dispatches the plain, synchronous `deposit` action with the
// converted amount. The reducer stays pure; all side effects live here.
export const depositConverted = createAsyncThunk(
  "account/depositConverted",
  async ({ amount, customerId }: { amount: number; customerId: string }, { dispatch }) => {
    const response = await fetch("https://api.frankfurter.dev/v2/rate/USD/INR");
    const { rate } = await response.json();

    dispatch(deposit({ deposite: amount * rate, customerId }));
  },
);

//// 🚫 OLD APPROACH 🚫

// interface DepositAction {
//   type: "account/deposit";
//   payload: DeplositPayload;
// }
// interface WithdrawAction {
//   type: "account/withdraw";
//   payload: WithdrawPayload;
// }
// interface GetLoanAction {
//   type: "account/getLoan";
//   payload: GetLoanPayload;
// }

// // Reducer for account actions
// export function accountReducer(
//   state: Account[] = accountInitialState,
//   action: DepositAction | WithdrawAction | GetLoanAction,
// ): Account[] {
//   switch (action.type) {
//     case "account/deposit":
//       return state?.map((account) => {
//         if (account.customerId === action.payload.customerId) {
//           return {
//             ...account,
//             deposite: [...account.deposite, action.payload.deposite],
//             total: account.total + action.payload.deposite,
//           };
//         } else {
//           return account;
//         }
//       });

//     case "account/withdraw":
//       return state?.map((account) =>
//         account.customerId === action.payload.customerId
//           ? {
//               ...account,
//               withdraw: [...account.withdraw, action.payload.withdrawAmount],
//               total: account.total - action.payload.withdrawAmount,
//             }
//           : account,
//       );
//     case "account/getLoan":
//       return state?.map((account) => {
//         if (account.customerId === action.payload.customerId) {
//           return {
//             ...account,
//             loanAmount: account.loanAmount + action.payload.loanAmount,
//             total: account.total + action.payload.loanAmount,
//           };
//         } else {
//           return account;
//         }
//       });
//     default:
//       return state;
//   }
// }

// // Action creators for account actions
// export function deposit(payload: DeplositPayload): DepositAction {
//   return { type: "account/deposit", payload };
// }

// // Action creators for account actions
// export function withdraw(payload: WithdrawPayload): WithdrawAction {
//   return { type: "account/withdraw", payload };
// }

// // Action creators for account actions
// export function getLoan(payload: GetLoanPayload): GetLoanAction {
//   return { type: "account/getLoan", payload };
// }
