import { Button,Input,Modal,ModalBody,ModalCloseButton,ModalContent,ModalOverlay,Select } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"

export default function AddProduct(){
    const [isOpen,setOpen]=useState(false)
    const[cat,setCat]=useState(true)

    const[name,setName]=useState("")
    const[Descr,setDescr]=useState("")
    const[gender,setGender]=useState("")
    const[category,setCategory]=useState("")
    const[price,setPrice]=useState("")

    function Add(){
        axios.post(`https://fuzzy-tan-beret.cyclic.app/products`,{
            name:name,
            description:Descr,
            gender:gender,
            category:category,
            price:price
        })
        .then(res=>{onClose()})
    }

    function onClose(){
        setOpen(false);
        return isOpen;
    }
    return (
        <>
        <Button w={"50%"} onClick={()=>{setOpen(true)}}>Add Product</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>
                <ModalBody m={"auto"}>
                    <Input type="text" placeholder="Product Name" onChange={(e)=>{setName(e.target.value)}}/>
                    <Input type="text" placeholder="Product Description" onChange={(e)=>{setDescr(e.target.value)}}/>
                    <Select onChange={(e)=>{setGender(e.target.value);gender==="male"?setCat(true):setCat(false)}}>
                        <option value={""}>gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </Select>
                    {!cat&&
                    <Select onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={""}>Category</option>
                        <option value={"Shirts"}>Shirts</option>
                        <option value={"Jeans"}>Jeans</option>
                        <option value={"Trousers"}>Trousers</option>
                        <option value={"Souts"}>Suits</option>
                    </Select>
                    }
                    {cat&&
                    <Select onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={""}>Category</option>
                        <option value={"Saree"}>Saree</option>
                        <option value={"Kurti"}>Kurti</option>
                        <option value={"Lehenga"}>Lehenga</option>
                        <option value={"Jackets"}>Jackets</option>
                    </Select>
                    }
                    <Input type="number" placeholder="price" onChange={(e)=>{setPrice(e.target.value)}}/>
                    <Button onClick={Add} m={"auto"}>Add Product</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}