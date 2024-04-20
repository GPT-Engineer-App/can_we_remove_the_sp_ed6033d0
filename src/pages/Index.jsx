import { Box, Button, Image, Flex, Center, Spacer, useBreakpointValue, VStack, Heading } from "@chakra-ui/react";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";

const Index = () => {
  const imageUrl1 = "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MDU1ODgwMDd8MA&ixlib=rb-4.0.3&q=80&w=1080";
  const imageUrl2 = "https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MDU1ODgwMDd8MA&ixlib=rb-4.0.3&q=80&w=1080";
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Flex direction="column" h="100vh" justify="center" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Website Screenshot Comparer
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" mb={0} gap={0}>
        <VStack>
          <Image src={imageUrl1} alt="Screenshot 1" boxSize={{ base: "xs", md: "lg" }} objectFit="contain" boxShadow="md" />
          <Button leftIcon={<FaCheck />} colorScheme="green" size={buttonSize}>
            Choose this
          </Button>
        </VStack>
        <Button leftIcon={<FaTimes />} rightIcon={<FaArrowRight />} colorScheme="blue" size={buttonSize} alignSelf="end" mx={2} display={{ base: "none", md: "flex" }}>
          Skip
        </Button>
        <VStack>
          <Image src={imageUrl2} alt="Screenshot 2" boxSize={{ base: "xs", md: "lg" }} objectFit="contain" boxShadow="md" />
          <Button leftIcon={<FaCheck />} colorScheme="green" size={buttonSize}>
            Choose this
          </Button>
        </VStack>
      </Flex>
      <Center display={{ base: "flex", md: "none" }}>
        <Button leftIcon={<FaTimes />} rightIcon={<FaArrowRight />} colorScheme="blue" size={buttonSize} w="full">
          Skip
        </Button>
      </Center>
    </Flex>
  );
};

export default Index;
