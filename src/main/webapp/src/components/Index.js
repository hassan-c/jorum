import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);

  function slug(name) {
    return name.toLowerCase().replace(' ', '-');
  }

  useEffect(() => {
    async function fetchCategories() {
      const getCategories = await fetch(`api/v1/category`);
      if (getCategories.ok) {
        setCategories(await getCategories.json());
      }
    }

    fetchCategories();
  }, []);

  return (
    <Box w="full">
      <VStack spacing={3} alignItems="left">
        <Box my={3}>Welcome to jorum, a simple forum written in Spring Boot and React.</Box>

        {categories.map((category) => (
          <Box key={category.id}>
            <Flex bg="gray.200" p={2} pr={4}>
              <Heading as="h3" size="m" flex="6">
                {category.name}
              </Heading>
              <Text flex="1" textAlign="right">
                Threads
              </Text>
              <Text flex="1" textAlign="right">
                Posts
              </Text>
              <Text flex="1" textAlign="right">
                Last post
              </Text>
            </Flex>
            {category.sections.map((section) => (
              <Flex
                as={RouterLink}
                to={`/section/${slug(section.name)}`}
                key={section.id}
                p={4}
                _hover={{ background: "gray.50" }}
              >
                <Box flex="6">
                  <VStack alignItems="left">
                    <Text>{section.name}</Text>
                    <Text fontSize="xs">{section.description}</Text>
                  </VStack>
                </Box>
                <Box flex="1" textAlign="right">
                  0
                </Box>
                <Box flex="1" textAlign="right">
                  0
                </Box>
                <Box flex="1" textAlign="right">
                  Today
                </Box>
              </Flex>
            ))}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
