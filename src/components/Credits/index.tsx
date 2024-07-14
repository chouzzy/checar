import { Flex, Text } from "@chakra-ui/react";


export function Credits() {

    return (

        <Flex
            color={'light.400'}
            bgColor={'dark.400'}

            fontSize={'0.875rem'}
            px={[8, 0, 0, 20, 20]}

        >
            <Flex
                py={8}
                w='100%'
                alignItems={'center'}
                justifyContent={'space-between'}
                borderTop={'0.5px solid #E5E5E580'}
                flexDir={['column','column','column','row','row']}
                textAlign={'center'}
                gap={4}
            >

                <Flex> Copyright  © 2023 | Todos os Direitos Reservados | Checar Soluções Automotivas Ltda - CPNJ: 42.625.571/0001-61</Flex>
                <Flex fontWeight={500}> feito com ♡ por <Text color='red.400' pl={1}> {" "}awer.co </Text></Flex>
            </Flex>
        </Flex>
    )
}