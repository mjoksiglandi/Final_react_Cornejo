import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Carousel from './Carousel';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loading from './Loading';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const queryCollection = selectedCategory
          ? query(itemsCollection, where('categoria', '==', selectedCategory))
          : itemsCollection;
        const snapShot = await getDocs(queryCollection);
        if (snapShot.size > 0) {
          const fetchedItems = snapShot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }));
          setItems(fetchedItems);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [id, selectedCategory]);

  return (
    <>
      {!id && <Carousel />}
      <div className="container">
        <div className="row my-5">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="custom-select"
            aria-label="Filter Items By Category"
          >
            <option value="">Todo</option>
            <option value="espada">Espadas</option>
            <option value="props">Props</option>
            <option value="staff">Staff</option>
          </select>
          {loading ? <Loading /> : <ItemList items={items} />}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
