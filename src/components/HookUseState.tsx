import { useState } from "react";


export default function HookUseState() {
  let name: string = "João";
  const [  userName, setUserName ] = useState("João");
  return (
    <div>
      <h1>HookUseState</h1>
      <p onClick={() => {console.log(name)
        name = "Davi";
      }}>Meu nome é {name}</p>
      <p onClick={() => userName === "João"? setUserName("davi"): setUserName("João")}>Meu username e {userName}</p>
      <form>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </form>
      <hr />
    </div>
  )
}
