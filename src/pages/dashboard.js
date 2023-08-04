import { Box, Button, Center, Flex, Heading, Input, Select, Table, TableContainer, Thead, Tr, Td, Modal, ModalOverlay } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useEffect, useState } from "react";
import ListItem from "../components/list";
import AddProduct from "../components/addProduct";

export default function Dashboard(){
    const[data,setData]=useState([])

    const[name,setName]=useState("")
    const[Descr,setDescr]=useState("")
    const[gender,setGender]=useState("")
    const[category,setCategory]=useState("")
    const[price,setPrice]=useState("")
    
    useEffect(()=>{
        axios.get(`https://fuzzy-tan-beret.cyclic.app/products?limit=5`)
        .then(res=>{console.log(res.data);setData(res.data)})
        .catch(err=>{console.log(err)})
    },[])
    return (
        <Box>
            <Center mt={6}>
                <Heading>ADMIN DASHBOARD</Heading>
            </Center>
            <Box w={"80%"} m={"auto"}>
                <Center mt={6}>
                    <Button>Dashboard</Button><Button>Stats</Button>
                </Center>

                <Flex justifyContent={"space-evenly"} gap={6} mt={6}>
                    <SearchIcon m={"auto"}/><Input type="text" placeholder="search"/>
                    <Select w={"50%"}>
                        <option value={""}>Filter by gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </Select>
                    <Select w={"50%"}>
                        <option value={""}>Filter by Category</option>
                        <option value={"Shirts"}>Shirts</option>
                        <option value={"Jeans"}>Jeans</option>
                        <option value={"Trousers"}>Trousers</option>
                        <option value={"Souts"}>Suits</option>
                    </Select>
                    <Select w={"50%"}>
                        <option value={""}>Sort by Price</option>
                        <option value={"asc"}>Ascending</option>
                        <option value={"desc"}>Descending</option>
                    </Select>
                    <AddProduct/>
                </Flex>
                <Box mt={6}>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                {/* <Td size={"sl"}>Image</Td> */}
                                <Td size={"sl"}>Product Name</Td>
                                <Td size={"sl"}>Product Description</Td>
                                <Td size={"sl"}>Gender</Td>
                                <Td size={"sl"}>Category</Td>
                                <Td size={"sl"}>Price</Td>
                                <Td size={"sl"}>Edit</Td>
                                <Td size={"sl"}>Delete</Td>
                                </Tr>
                            </Thead>
                            {
                                data.length>0 && data.map((ele)=>{
                                    return (<ListItem ele={ele}/>)
                                })
                            }
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    )
}