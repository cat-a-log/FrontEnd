
import TitleAddItem from "../components/Titles/titleAddItem";
import EmptySection from "../components/Empty-section";
import FormAddItem from "../components/Forms/formAddItem";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAPI } from "../services/Api";


function AddItem() {
   
   const { id } = useParams();
   const [box, setBox] = useState(null);

   useEffect(() => {
       const getBox = async () => {
         try {
           const response = await getAPI("/box/" + id);
   
           setBox(response);
         } catch (error) {}
       };
       getBox();
     }, []);

  return (
    
   <>
      {box && (
        <>
    
      <TitleAddItem box = {box} />
      <FormAddItem  box = {box} />
      <EmptySection/>
   
          </>
      )}
    </>
  );
}

export default AddItem;
