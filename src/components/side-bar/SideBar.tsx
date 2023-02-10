import {
  Box,
  Stack,
  Text,
  IconButton,
  Img,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import face from "../../images/face.svg";

function SideBar() {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("((max-width: 768px)");

  return (
    <Box>
      <Stack
        pos={{ base: "relative", md: "fixed" }}
        h={{ base: "40em", md: "100vh" }}
        w={{ base: "100vw", md: "28.6em" }}
        flexDir="column"
        backgroundColor="#ffd300"
        zIndex="popover"
        alignItems="center"
        justify="center"
      >
        <Box p={10}>
          <Img src={face} alt="Avatar" />
        </Box>
        <Stack spacing={2}>
          <Heading textAlign="center" fontSize="2xl">
            Front-end Challenge!
          </Heading>
          <Text textAlign="center" fontSize="lg" px={{ base: 8, md: 20 }}>
            This is the design that you need to code up and impress us.
          </Text>
        </Stack>
        <Box p={10}>
          {window.location.pathname === "/landing-page" ? (
            <IconButton
              aria-label=""
              bg="#373d40"
              rounded="full"
              onClick={() => {
                navigate("/landing-page/content-page");
              }}
            >
              {isMobile ? (
                <FiChevronDown size="xl" color="#ffd300" />
              ) : (
                <FiChevronRight size="xl" color="#ffd300" />
              )}
            </IconButton>
          ) : (
            <IconButton
              aria-label=""
              bg="#373d40"
              rounded="full"
              onClick={() => {
                navigate("/landing-page");
              }}
            >
              {isMobile ? (
                <FiChevronUp size="xl" color="#ffd300" />
              ) : (
                <FiChevronLeft size="xl" color="#ffd300" />
              )}
            </IconButton>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
export default SideBar;
