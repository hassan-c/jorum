import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [categories, setCategories] = useState([]);

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
    <Box>
      <VStack spacing={3} alignItems="left">
        <Box my={3}>
          Welcome to jorum, a simple forum written in Spring Boot and React.
        </Box>

        {categories.map((category) => (
          <Box key={category.id}>
            <Heading as="h3" size="m" bg="gray.200" p={2}>
              {category.name}
            </Heading>
            {category.sections.map((section) => (
              <Flex key={section.id} p={4}>
                <Box flex="6">{section.name}</Box>
                <Box flex="1">0</Box>
                <Box flex="1">Today</Box>
              </Flex>
            ))}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
