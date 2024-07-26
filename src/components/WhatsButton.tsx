import { Flex, Link, Text } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { CallToActionButton } from "./CallToActionButton";
import { CallToActionButtonData } from "./CallToActionButton/data";


export default function WhatsButton() {
    
   const [whatsNumber, setWhatsNumber] = useState('')
    
    return (
        <Link className="zap-tag" target={'_blank'} href={`${CallToActionButtonData.href}`}>
        
        <Flex zIndex={1} bg='#25D366' color="#fffafa"
        fontSize='1.8rem' borderRadius={'full'} p={4} 
        position='fixed'bottom={8} right={8}
        _hover={{ transition:' 400ms', fontSize:'2.4rem'}}
        cursor='pointer'>
            <BsWhatsapp/>
        </Flex>
        </Link>
    )
}
