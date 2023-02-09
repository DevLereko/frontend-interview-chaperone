import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInupts } from "../models/FormModel";
import GenderRadioButton from "../gender-radio-button/GenderRadioButton";
import MembershipRadioGroup from "../membership-radio-group/MembershipRadioGroup";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInupts>();

  const toast = useToast();

  const showToast = () => {
    toast({
      position: "top",
      title: "Details saved successfully!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit: SubmitHandler<FormInupts> = (data, e: any) => {
    e?.preventDefault();
    const registerUser = async () => {
      reset();
      console.log(data);
      showToast();
    };
    registerUser();
  };

  return (
    <Box w="full" py="0px" pl="28.6em" minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        minH="100vh"
        h="100%"
        mt="0px"
      >
        <Flex
          direction="column"
          justify="center"
          minH="100vh"
          w="full"
          pt="3em"
        >
          <Box px="28" py="1em">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing={"1.475em"}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="name"
                    textColor={errors.name ? "#ff9200" : "black"}
                  >
                    Name
                  </FormLabel>
                </Box>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    variant="filled"
                    border={errors.name ? "1px solid #ff9200" : "none"}
                    bgColor="#f5f8f9"
                    placeholder="Kendal Jenner"
                    {...register("name", {
                      required: "name is required!",
                    })}
                  />
                  {errors.name && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.name.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="gender"
                    textColor={errors.gender ? "#ff9200" : "black"}
                  >
                    Gender
                  </FormLabel>
                </Box>
                <FormControl>
                  <GenderRadioButton />
                  {errors.gender && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.gender.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="dateOfBirth"
                    textColor={errors.dateOfBirth ? "#ff9200" : "black"}
                  >
                    Date of Birth
                  </FormLabel>
                </Box>
                <FormControl>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    variant="filled"
                    border={errors.dateOfBirth ? "1px solid #ff9200" : "none"}
                    bgColor="#f5f8f9"
                    placeholder="01/02/1983"
                    {...register("dateOfBirth", {
                      required: "date of birth is required!",
                    })}
                  />
                  {errors.dateOfBirth && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.dateOfBirth.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="email"
                    textColor={errors.email ? "#ff9200" : "black"}
                  >
                    Email
                  </FormLabel>
                </Box>
                <FormControl>
                  <Input
                    id="email"
                    type="text"
                    variant="filled"
                    border={errors.email ? "1px solid #ff9200" : "none"}
                    bgColor="#f5f8f9"
                    placeholder="kendal@gmail.com"
                    {...register("email", {
                      required: "email address is required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-28.-]+\.[A-Z]{2,28}$/i,
                        message: "Invalid email address!",
                      },
                    })}
                  />
                  {errors.email && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.email.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="mobile"
                    textColor={errors.mobile ? "#ff9200" : "black"}
                  >
                    Mobile
                  </FormLabel>
                </Box>
                <FormControl>
                  <Input
                    id="mobile"
                    type="text"
                    variant="filled"
                    border={errors.mobile ? "1px solid #ff9200" : "none"}
                    bgColor="#f5f8f9"
                    placeholder="+91 9876543210"
                    {...register("mobile", {
                      required: "mobile number is required!",
                    })}
                  />
                  {errors.mobile && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.mobile.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel
                    htmlFor="customerId"
                    textColor={errors.customerId ? "#ff9200" : "black"}
                  >
                    Customer ID
                  </FormLabel>
                </Box>
                <FormControl>
                  <Input
                    id="customerId"
                    type="text"
                    variant="filled"
                    border={errors.customerId ? "1px solid #ff9200" : "none"}
                    bgColor="#f5f8f9"
                    placeholder="576802-ERD0348 45"
                    {...register("customerId", {
                      required: "customer ID is required!",
                    })}
                  />
                  {errors.customerId && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.customerId.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <Box minW="10em">
                  <FormLabel htmlFor="customerId">Membership</FormLabel>
                </Box>
                <FormControl>
                  <MembershipRadioGroup />
                  {errors.membership && (
                    <FormHelperText textAlign="end" color="#ff9200">
                      {errors.membership.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <Stack
                direction="row"
                spacing={4}
                align="center"
                justify="center"
              >
                <Button
                  colorScheme="black"
                  _hover={{ border: "1px solid #49c8a8" }}
                  variant="ghost"
                >
                  CANCEL
                </Button>
                <Button
                  bgColor="#49c8a8"
                  color="white"
                  type="submit"
                  variant="solid"
                  _hover={{ bgColor: "#49c8a8" }}
                >
                  SAVE
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Form;
