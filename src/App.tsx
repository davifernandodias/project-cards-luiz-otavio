import { useEffect, useState } from 'react';
import './App.css';
import { loadPosts } from './utils/loadpost';
import Posts from './components/Posts';
import { Button } from './components/ui/Button';
import Input from './components/ui/Input';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
function App( ) {
  const [posts, setPosts] = useState([]);
  const [postPorPage, setPostPorPage] = useState(5)
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [searchInputValue, setInputSearchValue] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);
  
  useEffect(() => {
    handleFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postPorPage]);

  useEffect(() => {
    const postFilterWithSearchValue = posts.filter((el : any) => el.title.includes(searchInputValue.toLowerCase()));
    
    setFilterPosts(postFilterWithSearchValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[posts, searchInputValue])
  
  const handleChangeFilter = (e: { target: { value: string; }; }) => {
    const {value} = e.target;
    setInputSearchValue(value)
  }

  const handleFetch = async () => {
    const { postsAndPhotos } = await loadPosts();
    setPosts(postsAndPhotos.slice( 0 , postPorPage));
  };

  const loadMorePost = () => {
    if(postPorPage < 101){
      setPostPorPage(postPorPage + 5)
      setIsActiveButton(false);
  }else{
    setIsActiveButton(true)
    console.log("não tem mais textos para as imagens")
  }
  }

  return (
    <>
      <section className="container">
        <Input Onchange={handleChangeFilter} value={searchInputValue}/>
        <Posts posts={filterPosts} />
        { !searchInputValue && (
          <Button isActiveValue={isActiveButton} event={loadMorePost} text='Loading more posts' />
        ) }
      </section>
    </>
  );
}

export default App;