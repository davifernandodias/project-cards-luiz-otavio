
interface InputInterface {
  value: string,
  Onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, Onchange } : InputInterface) => {
  return (
    <input type="text" value={value} onChange={Onchange} />
  )
}

export default Input