import React, { createContext, useState } from "react"
import Test from "./examples/test"
import Counter from './examples/counter'
import EffectHook from "./examples/useEffectHook"
import ContextHook from "./examples/useContextHook"
import CallbackHook from "./examples/useCallbackHook"
import MemoHook from "./examples/useMemoHook"

export const UserContext = createContext()

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <Test />
      <hr />
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>取反</button>
      <hr />
      <EffectHook />
      <hr />
      <UserContext.Provider value={{ name: 'coderlei', age: 19 }}>
        <ContextHook />
      </UserContext.Provider>
      <hr />
      <CallbackHook />
      <hr />
      <MemoHook />
    </>
  )
}

export default App