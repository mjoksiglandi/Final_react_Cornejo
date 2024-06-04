import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const docRef = doc(db, "items", id);
            try {
                const snapShot = await getDoc(docRef);
                if (snapShot.exists()) {
                    setItem({ id: snapShot.id, ...snapShot.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchItem();
        } else {
            setLoading(false);
        }
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                {loading ? <Loading /> : item && <ItemDetail item={item} />}
            </div>
        </div>
    );
};

export default ItemDetailContainer;