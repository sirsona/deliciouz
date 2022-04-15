import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await resp.json();
    setDetails(detailData);
  };
  //   fetchDetails();

  console.log("before useEffect");
  useEffect(() => {
    console.log("useEffect");
    fetchDetails();
  }, [params.name]);

  console.log("after useEffect");

  //   console.log(details.extendedIngredients[0].original);

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            </div>
            <div>
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </div>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredients) => (
              <li key={ingredients.id}>{ingredients.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
  margin-top: 5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
