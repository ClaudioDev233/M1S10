import styled from "styled-components";

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
    margin: 20px;

`;

export const TableHead = styled.thead`
  background: navy;
  
  tr{
      display: flex;
      justify-content: space-between;
      
  }
  th {
    width: 100px;
  color: #FFF;
  
  padding: 12px;
  }
`;

export const TableRow = styled.tr` 
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    margin-top: 10px;

  img{
      height: 150px;

  }
`;



