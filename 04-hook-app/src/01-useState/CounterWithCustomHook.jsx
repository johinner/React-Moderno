import { useCounter } from "../hook/useCounter";

export const CounterWithCustomHook = () => {

    const {counter, increment} = useCounter(1);

   return (
      <>
         <h1>Counter with Hook: {counter}</h1>
         <hr />

         <button onClick={increment}>+1</button>
         <button>Reset</button>
         <button>-1</button>
      </>
   )
};