import { store, type AppDispatch, type RootState } from "./store";

import { createCustomer, type Customer } from "./customerSlice";
import { depositConverted, getLoan, withdraw } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Bank() {
  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector((store: RootState) => store.account);

  function handleDeposit() {
    dispatch(depositConverted({ amount: 1000, customerId: "hska79" }));
  }

  function handleWithdraw() {
    dispatch(withdraw({ withdrawAmount: 10, customerId: "hska79" }));
  }

  function handleGetLoan() {
    dispatch(getLoan({ loanAmount: 2000, customerId: "hska79" }));
  }

  function handleCreateCustomer() {
    const data: Customer = {
      customerId: crypto.randomUUID(),
      fullName: "kishan permand",
      gender: "male",
      age: 32,
    };

    store.dispatch(createCustomer(data));
  }

  function handleShowState() {
    console.log(store.getState());
  }

  return (
    <>
      <div>
        <button onClick={handleDeposit}> Deposit</button>
        <button onClick={handleWithdraw}> WidthDraw</button>
        <button onClick={handleGetLoan}> Get Loan</button>
        <button onClick={handleCreateCustomer}> Create Customer</button>
        <button onClick={handleShowState}> Show State</button>
      </div>

      <div>
        <h2>Total Lons: {account[0].total}</h2>
      </div>
    </>
  );
}
