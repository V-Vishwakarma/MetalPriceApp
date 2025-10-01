import { useEffect, useState } from "react";
import { getGoldPrice, getPalladiumPrice, getPlatinumPrice, getSilverPrice } from "../api/metal";

const apiMap = {
    gold: getGoldPrice,
    silver: getSilverPrice,
    platinum: getPlatinumPrice,
    palladium: getPalladiumPrice,
};

export default function useMetalPrice(metal) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPrice = async () => {
        try {
            const result = await apiMap[metal]();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPrice();
    }, [metal]);

    return { data, loading, error, refetch: fetchPrice };
}
