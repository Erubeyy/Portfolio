import { useEffect, useState } from 'react';
import { getCurrentColor, setCurrentColor } from "../../helpers/Utils";


export const ThemeSwitch = () => {
    const [switchChecked, setSwitchChecked] = useState(false);

    useEffect(() => {
        const color = getCurrentColor();
        setSwitchChecked(color.indexOf('dark') > -1);
    }, []);

    const changeMode = () => {
        let color = getCurrentColor();

        if (color.indexOf('dark') > -1) {
            color = color.replace('dark', 'light');
        } else if (color.indexOf('light') > -1) {
            color = color.replace('light', 'dark');
        }

        setCurrentColor(color);
        setSwitchChecked(color.indexOf('dark') > -1);

        setTimeout(() => {
            window.location.reload();
        }, 200);
    };

    return (
        <>
            <label className="switch">
                <input
                    type="checkbox"
                    className="input-switch invisible"
                    checked={switchChecked}
                    onChange={changeMode}
                />
                <span className="slider round"></span>
            </label>
        </>
    );
};
