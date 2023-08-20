import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "utils/useDarkMode";

export function ModeSwitcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked: boolean) => {
        if (typeof setTheme !== 'string') setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
        </>
    );
}
