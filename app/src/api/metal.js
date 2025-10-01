
import { fetchData } from "./client";

const getMetalPrice = (metalSymbol) => {
    return fetchData(`${metalSymbol}/INR`);
}

export const getGoldPrice = () => getMetalPrice("XAU");
export const getSilverPrice = () => getMetalPrice("XAG");
export const getPlatinumPrice = () => getMetalPrice("XPT");
export const getPalladiumPrice = () => getMetalPrice("XPD");

