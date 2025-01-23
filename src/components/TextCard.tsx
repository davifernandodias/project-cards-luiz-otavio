import { elementsInterface } from "./Card"


const TextCard = ({ el } : elementsInterface) => {
  return (
    <div className='post-text'>
      <p>{el.id}</p>
      <h2>{el.title}</h2>
      <p>{el.body}</p>
    </div>  )
}

export default TextCard