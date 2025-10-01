
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import useMetalPrice from "../hooks/useMetalPrice";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const goldIcon = require("../../../assets/images/gold.png")
const silverIcon = require("../../../assets/images/silver.png")
const platinumIcon = require("../../../assets/images/platinum.png")
const palladiumIcon = require("../../../assets/images/palladium.png")

export default function MetalCard({ metal, displayName, onPress }) {
    const { data, loading, error } = useMetalPrice(metal);

    const item = data?.data?.[0] ?? data;
    const price = item?.price ?? "N/A";
    const change = item?.ch ?? 0;
    const changePercent = item?.chp ?? 0;

    if (loading) return <Loader metal={metal}/>;
    if (error) return <ErrorMessage message={error} />;

    // Get metal icon and color
    const getMetalImage = () => {
        switch (metal) {
            case "gold":
                return { image: goldIcon };
            case "silver":
                return { image: silverIcon };
            case "platinum":
                return { image: platinumIcon };
            case "palladium":
                return { image: palladiumIcon };
            default:
                return { image: "help" };
        }
    };

    const metalImage = getMetalImage();

    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-[#082739] rounded-2xl p-4 mb-6 border-2 border-[#0c3a52]"
            activeOpacity={0.8}
        >
            <View className="flex-row justify-between items-center">
                {/* Left Side */}
                <View className="flex-1">
                    <Text className="text-white text-lg font-bold capitalize">
                        {displayName || metal}
                    </Text>

                    <Text className="text-white text-2xl font-bold mt-2">
                        ₹{typeof price === 'number' ? price.toFixed(2) : price}
                    </Text>

                    <View className="flex-row items-center mt-1">
                        <Text className={`text-sm font-medium ${change >= 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {change >= 0 ? '+' : ''}{change} ({changePercent}%)
                        </Text>
                    </View>

                    <Text className="text-gray-400 text-xs mt-2">
                        {/* Updated: {new Date().toLocaleTimeString()} */}
                        Updated: {new Date().toLocaleString()}
                    </Text>
                </View>

                {/* Right Side */}
                <View className="ml-4">
                    <View className="bg-[#0c3a52] p-3 rounded-full">
                        <Image
                            source={metalImage.image}
                            style={{ width: 50, height: 50 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}