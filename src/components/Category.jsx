import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>

      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>

      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>

      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 4rem;
  margin: 2rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
    }
  }
`;

export default Category;
