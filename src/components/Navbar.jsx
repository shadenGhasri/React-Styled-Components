import styled from "styled-components"

const StyleButton = styled.button   `
    border: 2px solid purple;
    background-color: white;
    width: 75px;
    height: auto;
    color: black;
    &:hover{
        color: white;
        background-color: purple;
    }
`

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sabt Ahval
          </a>
           
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link mx-5 mt-2">
                Forms
              </a>
              <a className="nav-link active mx-5 mt-2 border-bottom">
                Users
              </a>
              <StyleButton className="nav-link mx-5 mt-2">
                Log in
              </StyleButton>
            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  );
};

export default NavBar;
