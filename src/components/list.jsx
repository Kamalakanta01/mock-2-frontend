import { Button, Flex,Td, Tr } from "@chakra-ui/react";
import EditProduct from "./editProduct";
import axios from "axios";

export default function ListItem({ele}){
    function Delete(){
        axios.delete(`https://fuzzy-tan-beret.cyclic.app/products/id=${ele.id}`)
    }
    return (
        <Tr>
            <Td>{ele.name}</Td>
            <Td>{ele.description}</Td>
            <Td>{ele.gender}</Td>
            <Td>{ele.category}</Td>
            <Td>{ele.price}</Td>
            <Td><EditProduct/></Td>
            <Td><Button onClick={Delete}>Delete</Button></Td>
        </Tr>
    )
}