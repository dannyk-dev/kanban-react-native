import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { forwardRef } from "react";
import useTheme from "../hooks/useTheme";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    const theme = useTheme();

    return (
      <Pressable ref={ref} {...pressableProps} style={[styles.container, { backgroundColor: theme.tint }]}>
        <Text style={[styles.text, { color: theme.tabIconSelected }]}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light.tint,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    // marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    // color: "white",
  },
});

export default Button;