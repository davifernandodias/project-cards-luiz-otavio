import Card from "./Card"

export interface postInterface {
  posts: {
    id: number;
    title: string;
    cover: string;
    body: string;
  }[];
}

function Posts({ posts } : postInterface) {


  return (
        <div className="posts">
          {posts.map((el) => (
            <Card el={el} key={el.id} />
          ))}
        </div>  )
}

export default Posts