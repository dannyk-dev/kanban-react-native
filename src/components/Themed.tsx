import {
  Text as DefaultText,
  View as DefaultView,
  StyleProp,
  TextStyle,
} from "react-native";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "./useColorScheme";

type FontVariants =
  | "Montserrat_400Regular"
  | "Montserrat_600SemiBold"
  | "Nunito_400Regular"
  | "Nunito_600SemiBold";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  fontFamily?: FontVariants;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, fontFamily, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  ) as string;

  return (
    <DefaultText
      style={[
        {
          color,
          fontFamily: fontFamily ?? ("Nunito_600SemiBold" as FontVariants),
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  ) as string;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

// export function GradientBackground(props: Omit<LinearGradientProps, 'colors'|'locations'>) {
//   const colorscheme = useColorScheme();
//   const {gradient} = Colors[colorscheme ?? 'light'];

//   return (
//     <LinearGradient colors={gradient as string[]} {...props} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.6 }} locations={[0.112, 0.911]}>
//       {props.children}
//     </LinearGradient>
//   )
// }

// background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );
