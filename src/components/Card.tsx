import TextCard from "./TextCard"
import Image from "./ui/Image"

export interface elementsInterface {
  el: {
    id: number,
    title: string,
    cover: string,
    body: string
  }
}


const Card = ({ el } : elementsInterface) => {
  return (
    <div className='post-content'>
    <Image el={el}/>
    <TextCard el={el}/>
  </div>  )
}

export default Card