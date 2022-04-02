import { FunctionComponent } from "react";

import css from "./Button.module.css";

export const Button: FunctionComponent = () => {
	return <button className={css["button"]}></button>;
};
