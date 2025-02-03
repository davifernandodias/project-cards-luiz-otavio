import {  useState } from "react"


export default function HookUseEffect() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log("carreguei")
  //   const timer = setInterval(() => {
  //     console.log("executando")
  //   }, 1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // },[count])
  return (
    <div>
      <h1>HookUseEffect</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev+ 1)}>acrescentar</button>
      <hr />
    </div>
  )
}
