"use client";

import { useContext } from "react";
import { ThemeContext } from "./app-theme-provider";

export default function AppShowTheme() {
  const { darkTheme } = useContext(ThemeContext);
  return <div>{darkTheme ? "Dark" : "Light"} theme</div>;
}
