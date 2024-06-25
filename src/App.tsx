
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useApppSelector } from "./redux/hooks";


function App() {
  const { count } = useApppSelector((state) => state.counter);
  const dispatch = useAppDispatch()
  return (
    <>
      <div className=" flex h-screen w-full justify-center items-center  bg-black">
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 btn  py-2 rounded-md bg-green-500 text-white text-xl font-semibold">IncrementBy value</button>
        <button onClick={() => dispatch(increment())} className="px-3 btn  py-2 rounded-md bg-green-500 text-white text-xl font-semibold">Increment</button>
        <h1 className="mx-14 text-white text-3xl">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 btn py-2 focus:scale-95 rounded-md bg-red-500 text-xl font-semibold"> Decrement</button>
      </div>
    </>
  )
}

export default App
