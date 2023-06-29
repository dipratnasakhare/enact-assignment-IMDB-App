import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { BiBookmarkPlus } from "react-icons/bi";
export const Watchlist = () => {
  return (
    <Box >
      <Text p="1rem" fontSize={"2xl"} color={"yellow"} as="b">
        What to watch
      </Text>

      <Box p="5"  className="Box" mt="1rem" display={"grid"} gap="10px" color={"gray"}>
        <Box>
          <Text pl="5px" borderRadius={"5px"} borderLeft={"4px solid yellow"}>
            From to watch
          </Text>
        </Box>
        <Center>
          <BiBookmarkPlus size={"40"} color="white" />
        </Center>

        <Center>
          <Text>Your Watchlist is Empty</Text>
        </Center>

        <Center >
          <Text textAlign={"center"}>
            Save show and movies to keep track of what you want to watch
          </Text>
        </Center>

        <Center mt="1rem">
            <Text borderRadius={"4px"} p="5px" border={"1px solid gray"} color="blue.300">Browse popular movies</Text>
        </Center>
      </Box>
    </Box>
  );
};
