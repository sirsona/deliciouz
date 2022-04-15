import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Link } from "react-router-dom";

const Veggie = () => {
  // const API_KEY = "539517e551524b5ea26dc9ef5342f3d5";

  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("veggie");
    // console.log(check);
    // console.log(veggie);

    if (check) {
      setVeggie(JSON.parse(check));
      // setVeggie());
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);
      // console.log(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: true,
          gap: "4rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    position: absolute;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
