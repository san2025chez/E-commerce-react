import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList/ItemList.js";

import 'firebase/firestore'
import Spinner from "../components/Spinner/Spinner";
import "./Home.scss";
import {useParams} from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {Id} = useParams();

  console.log("CATEGORIA",Id);

  useEffect(() => {
//1-armar la referencia
   // const productref= collection(db,'productos')

//2get a esa referncias product
/* getDocs(productref)
.then((collection)=>{
const item=collection.docs.map((doc)=>{
  id:doc.id,
  ...doc.data()
})
setItems(item)
})
.finally(()=>{
  setLoading(false)
}) */
const db = getFirestore();



    const itemCollection = collection(db,"productos");



    if (Id) {
      const itemQuery = query(itemCollection, where('categoria', '==', Id));
      getDocs(itemQuery).then((snapshot) => {
          setItems(snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
          })))
          setLoading(false)
      })
  } else {
      getDocs(itemCollection).then((snapshot) => {
          setItems(snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
          })))
          setLoading(false)
      })
    }
  }, [Id]);
  console.log("products en Home", items);


  

  return (
    <>
      {loading ? (
        <div id="Home" className="home">
          <Spinner />
        </div>
      ) : (
        <div className="container">
          <>
            <ItemList items={items} />
          </>
        </div>
      )}
    </>
  );
};
export default Home;
