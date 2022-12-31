import { useState } from 'react';
import { AddCategories, GifGrid } from './components/';


export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([ "Naruto"]);

  const onAddCategory = (newCategory) => {
     

    if (categories.includes(newCategory)) return 0;
    setCategories([newCategory, ...categories]);
    // setCategories((categories) => [...categories, "Valorant"])
  }


  return (
    <>
      <h1>GifExpertApp</h1>


      <AddCategories
        //  onAddCategory={setCategories} 
        onNewCategory={onAddCategory}
      />


      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }


    </>
  )
}
