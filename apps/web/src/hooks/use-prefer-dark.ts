"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

export function usePreferDarkMode() {
	const { userTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);
	const [shouldShowDither, setShouldShowDither] = useState(false);

	useEffect(() => {
		const checkDarkMode = () => {
			const dark =
				userTheme === "dark" ||
				(userTheme === "system" && window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches);

			setIsDark(dark);
			setShouldShowDither(dark);
		};

		checkDarkMode();

		if (userTheme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			mediaQuery.addEventListener("change", checkDarkMode);
			return () => mediaQuery.removeEventListener("change", checkDarkMode);
		}
	}, [userTheme]);

	return {
		isDark,
		shouldShowDither,
	};
}
