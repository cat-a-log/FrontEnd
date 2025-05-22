
import TitleUpdateItem from "../components/Titles/titleUpdateItem";
import EmptySection from "../components/Empty-section";
import FormUpdateItem from "../components/Forms/formUpdateItem";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAPI } from "../services/Api";


function UpdateItem() {
   
   const { id } = useParams();
   const [item, setItem] = useState(null);


   useEffect(() => {
       const getItem = async () => {
         try {
           const response = await getAPI("/item/" + id);
   
           setItem(response);
         } catch (error) {}
       };
       getItem();

     }, []);

  return (
    
   <>
      {item && (
        <>
    
      <TitleUpdateItem item = {item} />
      <FormUpdateItem  item = {item} />
      <EmptySection/>
   
          </>
      )}
    </>
  );
}

export default UpdateItem;
