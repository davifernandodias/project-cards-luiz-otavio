import { elementsInterface } from "../Card"


const Image = ({ el } : elementsInterface) => {
  return (
    <img src={el.cover} alt={el.title} className='image'/>
  )
}

export default Image