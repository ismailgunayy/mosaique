import { toLower } from "lodash";

export const generatePath = (name: string) => {
	return "/" + name.split(" ").map(toLower).join("-");
};
