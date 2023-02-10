import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  UseRadioProps,
  Text,
  Img,
} from "@chakra-ui/react";
import femaleIcon from "../../images/venus-symbol.svg";
import maleIcon from "../../images/mars-symbol.svg";

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

function MappedGenderGroup() {
  const list = ["Male", "Female"];
  const listIcons = { maleIcon, femaleIcon };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "test",
    defaultValue: "Male",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {list.map((item) => (
        <>
          <Box key={item}>
            <CustomRadio {...getRadioProps({ value: item })}>
              {item === "Male" ? (
                <Img src={listIcons.maleIcon} width="4" height="4" />
              ) : (
                <Img src={listIcons.femaleIcon} width="4" height="4" />
              )}
            </CustomRadio>
          </Box>
          <Text>{item}</Text>
        </>
      ))}
    </HStack>
  );
}
export default function GenderRadioButton() {
  return (
    <Box>
      <MappedGenderGroup />
    </Box>
  );
}
