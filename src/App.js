import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;
