import { Flex, Heading, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { PiRoadHorizon } from "react-icons/pi";
import { AirplaneTakeoff } from "phosphor-react";
import { Card_1_Data } from "./data";
import { CallToActionButton } from "../../../../../CallToActionButton";
import { CallToActionButtonData } from "../../../../../CallToActionButton/data";

export function Card_1() {

    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })

    return (

        <Flex
            w='100%'
            h='100%'
            pr={[0, 4, 4, 12, 12]}
            pl={[0, 4, 4, 0, 0]}
            py={[4, 4, 4, 0, 0]}
            gap={[12, 12, 12, 0, 0]}

            flexDir={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}
            position={'relative'}
        // pb={80} para ajustar altura
        >
            {/* LOGO */}
            <Flex mx={[0, 4, 4, 'initial', 'initial']} mt={4} >
                <Image src="static/img/container_1/mainSection/header/logo.png" maxW={['180px', '180px', '180px', '391px', '391px']} />

                {isMobile ?
                    <Image
                        src="static/img/container_1/mainSection/header/header-dots.png"
                        position={'absolute'}
                        top={-32}
                        right={0}
                        w={32}
                    />
                    :
                    ''
                }

            </Flex>


            {/* HEADING */}
            <Flex flexDir={'column'} pl={[2, 8, 8, 8, 8]} zIndex={1} gap={6}
                mx={[4, 4, 4, 'initial', 'initial']}
                borderLeft={['4px solid #EF4444', '0', '0', '4px solid #EF4444', '4px solid #EF4444']}
            >

                <Flex>
                    <Heading
                        fontFamily={'Noto Serif'}
                        fontWeight={800}
                        fontSize={['1.5rem', '1.5rem', '1.5rem', '3rem', '3rem']}
                    >
                        Sua oficina mecânica especializada em Brasília
                    </Heading>

                </Flex>



                <Flex>
                    <Text
                        fontFamily={'synonym'}
                        fontSize={['1rem', '1rem', '1rem', '1.25rem', '1.25rem']}
                    >
                        <b style={{ fontWeight: "500" }}>
                            Dos reparos mais simples às soluções técnicas avançadas,
                        </b>
                        {" "}estamos aqui para elevar o rendimento e a confiabilidade do seu automóvel.
                    </Text>
                    <Flex h='140px' />
                </Flex>




            </Flex>
            {isMobile ?
                <Flex h='50%' w='100%' zIndex={0} mt={-20} mb={-20} >
                    <Image src='static/img/container_1/mainSection/header/carro-2.png' w='100%' objectFit={'cover'} />
                </Flex>
                :
                ''
            }

            {/* CALL BUTTON */}
            <Flex mx={['auto', 'auto', 'auto', 'initial', 'initial']}>
                <CallToActionButton title="Solicite um orçamento" />
            </Flex>

            {/* CONTATOS */}
            <Flex gap={8} mx={[4, 4, 4, 'initial', 'initial']} flexDir={['column','column','row','row','row']}>
                <Flex flexDir={'column'}>
                    <Text fontWeight={500} fontSize={'1.25rem'}> Onde estamos</Text>
                    <Text color='red.400'>Asa sul - CRS 514 Bloco C Loja 28</Text>
                </Flex>

                <Flex flexDir={'column'}>
                    <Text fontWeight={500} fontSize={'1.25rem'}> Fale conosco </Text>
                    <Link _hover={{ textDecor: "none", color:"#1A1A1A", transition:"300ms" }} color='red.400' href={CallToActionButtonData.href} target="_blank">
                        <Text >☎️ (61) 3345-7474</Text>
                    </Link>
                </Flex>

            </Flex>
        </Flex>
    )
}