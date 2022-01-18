import  styled  from "styled-components"

export const Menus = styled.nav`
    width: 100%;
    height: 50px;
    background-color: navy;
    color: aliceblue;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
    
    color: #FFF; 
    text-decoration: none;
    
  };
  h1{
    font-weight: bold;
    font-size: 26px;
  }
`;

export const MenuDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding-right: 10px;
`