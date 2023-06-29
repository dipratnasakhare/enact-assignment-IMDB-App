import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export const ContainerBox = ({ genre, title }) => {
  return (
    <>
      <Box
        key={title}
        gap="3"
        display={"flex"}
        p="5"
        borderTop={"1px solid gray"}
      >
        <Image
          w="20%"
          src="https://yt3.googleusercontent.com/weD7WfgxB3sjFX7Yr4RBk3oAYKYLT4yjb9N3yK10VwF1Pmusidh7xqk1tAP23QpW1rur2Gst0s4=s900-c-k-c0x00ffffff-no-rj"
        />

        <Box>
          {" "}
          <Text>{title}</Text>
          <Text color="gray">{genre}</Text>
        </Box>
      </Box>
    </>
  );
};
