import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";
import { forwardRef } from "react";
import useTheme from "../hooks/useTheme";

type ButtonProps = {
  text: string;
  ghost?: boolean;
  contentStyle?: TextStyle | undefined;
  size?: "sm" | "normal";
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  (
    { text, ghost = false, contentStyle, size = "normal", ...pressableProps },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[
          styles.container,
          {
            backgroundColor: !ghost ? theme.tint : "transparent",
            borderColor: theme.tint,
            borderWidth: 2,
            paddingVertical: size === "normal" ? 15 : 5,
            paddingHorizontal: size === "normal" ? 30 : 15,
            marginRight: size === "sm" ? 5 : 0,
          },
        ]}
      >
        <Text
          style={[styles.text, contentStyle, { color: theme.tabIconSelected }]}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
