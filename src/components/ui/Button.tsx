interface ButtonInterface {
  event: () => void; 
  text: string;
  isActiveValue: boolean
}


export const Button = ({ event, text, isActiveValue } : ButtonInterface) => {
  return (
    <button 
    onClick={event} 
    disabled={isActiveValue}
    >{text}</button>
  )
}
