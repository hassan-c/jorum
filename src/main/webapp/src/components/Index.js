import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
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
          <Box>
            <Heading as="h3" size="m">
              {category.name}
            </Heading>
            <Divider />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
