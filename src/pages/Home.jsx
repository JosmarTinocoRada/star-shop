import React from 'react';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';
import { useCollectionItems } from '../hooks/useCollectionItems';

const Home = () => {
  const { items  } = useCollectionItems("products");

  return (
    <>
      <ItemListContainerComponent products={ items }/>
    </>
  )
}

export default Home