import TitleUpdateBox from "../components/Titles/titleUpdateBox";
import FormCreateBox from "../components/Forms/formCreateBox";
import EmptySection from "../components/Empty-section";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAPI } from "../services/Api";

function UpdateBox() {
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
      <TitleUpdateBox title={box.name}/>
      <FormCreateBox box={box} />

      <EmptySection />
    </>
      )
    }
     </>
  );
}

export default UpdateBox;
