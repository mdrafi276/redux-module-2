

function App() {

  return (
    <>
      <div className=" flex h-screen w-full justify-center items-center border-2  bg-black">
        <button className="px-3 btn  py-2 rounded-md bg-green-500 text-white text-xl font-semibold">Increment</button>
        <h1 className="mx-14 text-white text-3xl">0</h1>
        <button className="px-3 btn py-2 focus:scale-95 rounded-md bg-red-500 text-xl font-semibold"> Decrement</button>
      </div>
    </>
  )
}

export default App
