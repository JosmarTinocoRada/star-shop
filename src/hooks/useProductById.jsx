import React from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const useProductById = (id) => {
  const [product, setProduct] = React.useState([])

  React.useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);

    getDoc(productRef).then((doc) =>{
      setProduct({id: doc.id, ...doc.data()}
    );
    })
    .catch(() => setError(true))
  }, [id]);
  return { product };
};

