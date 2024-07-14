import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { CallToActionButton } from "../../CallToActionButton";



export function Footer() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
    })

    return (
        <Flex
            w='100%'
            bgColor={'dark.400'}
            color={'light.400'}

            flexDir={['column', 'column', 'column', 'row', 'row']}
            alignItems={'flex-end'}
            justifyContent={'center'}

            position={'relative'}

            px={[8, 0, 0, 20, 20]}
            py={[8, 8, 8, 20, 20]}
            gap={12}
        >

            
            {/* CALL TO ACTION CARD */}
            <Flex
                w={['max', 'max', 'max', 'min', 'min']}
                fontWeight={700}
                fontSize={['1.35rem', '1.35rem', '1.35rem', '2.25rem', '2.25rem']}
                fontFamily={'Noto Serif'}
                flexDir={'column'}
                gap={16}
            >
                <Text
                    mt='auto' 
                    pl={[6]}
                    pr={8}
                    borderLeft={['4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444', '4px solid #EF4444']}
                >
                    Venha nos fazer uma visita
                </Text>
                {isMobile ?
                    ''
                    :
                    <CallToActionButton width={"350px"} title="Solicite um orçamento" />
                }
            </Flex>

            <Flex flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'column']} w='100%' gap={[4, 4, 4, 2, 2]}>
                <Flex flexDir={'column'} gap={6}>

                    <Flex>
                        <Text>Onde estamos</Text>
                    </Flex>
                    <Flex>
                        <Text color='red.400'>Asa Sul Comércio Residencial Sul 514 Bloco C – Loja 28 – Brasília, DF, 70380-535</Text>
                    </Flex>

                    {isMobile ?
                        <CallToActionButton width={"350px"} title="Solicite um orçamento" />
                        :
                        ''
                    }
                </Flex>
                <Flex>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5936103127083!2d-47.927729811145!3d-15.825368299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3000466c7f99%3A0xe95e8a4bbe21457c!2sChecar%20Solu%C3%A7%C3%B5es%20Automotivas!5e0!3m2!1spt-BR!2sbr!4v1720835333828!5m2!1spt-BR!2sbr" width="100%" height="400px" loading="lazy" ></iframe>
                </Flex>
            </Flex>
        </Flex>
    )
}