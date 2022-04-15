import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await resp.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>

            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
