import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Loader({ metal = "gold" }) {
    const [dots, setDots] = useState(0);

    // Metal symbols mapping
    const metalSymbols = {
        gold: "XAU",
        silver: "XAG",
        platinum: "XPT",
        palladium: "XPD"
    };

    // Metal colors for loader
    const metalColors = {
        gold: "#FFD700",
        silver: "#C0C0C0",
        platinum: "#E5E4E2",
        palladium: "#B4B4B4"
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev + 1) % 6); // Cycle through 0-5 dots
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const symbol = metalSymbols[metal] || "XAU";
    const color = metalColors[metal] || "#FFD700";

    return (
        <View className="flex-1 items-center justify-center py-4">
            {/* Metal Symbol */}
            <Text className="text-2xl font-bold text-white mb-6">
                {symbol}
            </Text>

            {/* Animated Dots Container */}
            <View className="flex-row items-center justify-center">
                <Text className="text-white text-lg font-medium mr-2">
                    Loading
                </Text>
                <View className="flex-row">
                    {[...Array(5)].map((_, index) => (
                        <View
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 ${index < dots
                                    ? "bg-white opacity-100"
                                    : "bg-gray-500 opacity-30"
                                }`}
                            style={{
                                backgroundColor: index < dots ? color : "#6B7280"
                            }}
                        />
                    ))}
                </View>
            </View>

            {/* Metal Name */}
            <Text className="text-gray-400 text-sm mt-4 capitalize">
                {metal} prices
            </Text>
        </View>
    );
}