import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ContentPage() {
  return (
    <Box
      w="full"
      py={{ base: "28.6px", md: "0px" }}
      pl={{ base: "none", md: "28.6em" }}
      bgColor="#ff9200"
      minH="100vh"
    >
      <Flex
        direction="column"
        justify="center"
        gap={8}
        align="center"
        minH="100vh"
        h="100%"
        mt="0px"
      >
        <Heading textAlign="center" fontSize="2xl">
          My world today
        </Heading>
        <Text textAlign="start" fontSize="lg" px={{ base: 8, md: 20 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. View all days voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Text>
      </Flex>
    </Box>
  );
}
