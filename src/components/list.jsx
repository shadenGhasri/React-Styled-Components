import styled from "styled-components"

const ListStyle = styled.div`
    border-radius: 20px;
    background-color: purple;
    color: whitesmoke;
    padding: 10px;
    margin: 10px;
`

const List = ({text}) => {
    return ( <>
            <ListStyle>{text}</ListStyle>
    </> );
}
 
export default List;