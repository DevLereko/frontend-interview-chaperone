import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  UseRadioProps,
  Text,
  Img,
} from "@chakra-ui/react";
import card from "../../images/card--white.svg";

interface CustomRadioProps extends UseRadioProps {
  children: React.ReactNode;
}

function CustomRadio(props: CustomRadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{ backgroundColor: "#cad7dd" }}
        _hover={{ cursor: "pointer" }}
        bgColor="#f5f8f9"
        rounded="full"
        p={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function MappedGroup() {
  const list = ["Classic", "Silver", "Gold"];
  const icon = { card };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "test",
    defaultValue: "Classic",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {list.map((item) => (
        <>
          <Box key={item}>
            <CustomRadio {...getRadioProps({ value: item })}>
              <Img src={icon.card} width="4" height="4" />
            </CustomRadio>
          </Box>
          <Text>{item}</Text>
        </>
      ))}
    </HStack>
  );
}
export default function MembershipRadioGroup() {
  return (
    <Box>
      <MappedGroup />
    </Box>
  );
}
