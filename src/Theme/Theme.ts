import { DefaultTheme } from "@react-navigation/native";


export const MyTheme = {
  ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(15, 16, 16)',
      background: 'rgb(15, 16, 16)', //Background Screen
      card: 'rgb(221, 116, 62)', //Card Background
      text: 'rgb(245,245,245)',  //Text Color
      border: 'rgb(#fff)', 
      button: 'rgb(221, 116, 62)', //Botão
      notification: 'rgb(249, 248, 113)', //Notification,
      text_contrast: 'rgb(0, 0, 0)'
    },
  };

