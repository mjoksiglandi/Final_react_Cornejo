import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, 'items');
                const queryCollection = id ? query(itemsCollection, where('categoria', "==", id)) : itemsCollection;
                const snapShot = await getDocs(queryCollection);
                if (snapShot.size > 0) {
                    const fetchedItems = snapShot.docs.slice(0, 8).map(item => ({ id: item.id, ...item.data() }));
                    setItems(fetchedItems);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();

    }, [id]);

    return (
        <>
            {!id && <Carousel />} {}
            <div className="container">
                <div className="row my-5">
                    {loading ? <Loading /> : <ItemList items={items} />}
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;