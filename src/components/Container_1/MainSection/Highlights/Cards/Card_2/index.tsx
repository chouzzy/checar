import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Card_2_Data } from "./data";


export function Card_2() {

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
            flexDir={'column'}
            gap={14}
        >
            {isMobile ?
                ''
                :
                <Flex h='50%' zIndex={1}>
                    <Image src='static/img/container_1/mainSection/header/carro-3.png' w='100%' objectFit={'cover'} />
                </Flex>
            }
            {isMobile ?
                ''
                :
                <>
                    <Flex
                        position={'absolute'}
                        zIndex={2}
                        top={14}
                        bottom={0}
                        my='auto'
                        right={140}
                        bgColor={'red.400'}
                        w='4px'
                        h='356px'
                    >
                    </Flex>
                    <Image
                        src='static/img/container_1/mainSection/header/header-square.png'
                        position={'absolute'}
                        top={14}
                        bottom={0}
                        my='auto'
                        zIndex={0}
                        right={0}
                        maxW={190}
                    />
                </>
            }
            {isMobile ?
                ''
                :
                <Flex h='50%' zIndex={1}>
                    <Image src='static/img/container_1/mainSection/header/carro-2.png' w='100%' objectFit={'cover'} />
                </Flex>
            }

        </Flex>
    )
}