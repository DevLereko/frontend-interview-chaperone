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
                spacing="1.475em"
                alignItems="center"
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Kendal Jenner"
                    {...register("name", {
                      required: "name is required!",
                    })}
                  />
                  {errors.name && (
                    <FormHelperText textAlign="end" color="red.400">
                      {errors.name.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              <FormControl mb="3">
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Input
                  id="gender"
                  type="text"
                  placeholder="+267 6753 8735"
                  {...register("gender", {
                    required: "gender is required!",
                  })}
                />
                {errors.gender && (
                  <FormHelperText textAlign="center" color="red.400">
                    {errors.gender.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Stack
                direction={{ base: "column", lg: "row" }}
                mb="3"
                spacing="1.475em"
                alignItems="center"
              >
                <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    placeholder="01/02/1983"
                    {...register("dateOfBirth", {
                      required: "Date of birth is required!",
                    })}
                  />
                  {errors.dateOfBirth && (
                    <FormHelperText textAlign="end" color="red.400">
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="text"
                    placeholder="kendal@gmail.com"
                    {...register("email", {
                      required: "email address is required!",
                    })}
                  />
                  {errors.email && (
                    <FormHelperText textAlign="end" color="red.400">
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
                <FormLabel htmlFor="mobile">Mobile</FormLabel>
                <FormControl>
                  <Input
                    id="mobile"
                    type="text"
                    placeholder="+91 9876543210"
                    {...register("email", {
                      required: "mobile number is required!",
                    })}
                  />
                  {errors.mobile && (
                    <FormHelperText textAlign="end" color="red.400">
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
                <FormLabel htmlFor="customerId">Customer ID</FormLabel>
                <FormControl>
                  <Input
                    id="customerId"
                    type="text"
                    placeholder="576802-ERD0348 45"
                    {...register("customerId", {
                      required: "customer ID is required!",
                    })}
                  />
                  {errors.customerId && (
                    <FormHelperText textAlign="end" color="red.400">
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
                <FormLabel htmlFor="membership">Membership</FormLabel>
                <FormControl>
                  <Input
                    id="membership"
                    type="text"
                    placeholder="kendal@gmail.com"
                    {...register("membership", {
                      required: "membership is required!",
                    })}
                  />
                  {errors.membership && (
                    <FormHelperText textAlign="end" color="red.400">
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
                <Button colorScheme="teal" variant="ghost">
                  CANCEL
                </Button>
                <Button colorScheme="teal" type="submit" variant="solid">
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
