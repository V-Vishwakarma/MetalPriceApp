import React, { useState } from "react";
import { Text, View, ScrollView, Image, RefreshControl } from "react-native";
import useMetalPrice from "../hooks/useMetalPrice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const goldIcon = require("../../../assets/images/gold.png")
const silverIcon = require("../../../assets/images/silver.png")
const platinumIcon = require("../../../assets/images/platinum.png")
const palladiumIcon = require("../../../assets/images/palladium.png")

export default function DetailScreen({ metal }) {
    const { data, loading, error, refetch } = useMetalPrice(metal);
    const item = data?.data?.[0] ?? data;
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            await refetch(); // Call your data refetch function
        } catch (error) {
            console.error("Refresh error:", error);
        } finally {
            setRefreshing(false);
        }
    };

    // Metal information mapping
    const metalInfo = {
        gold: {
            name: "Gold",
            symbol: "XAU",
            image: goldIcon,
            description: "The most sought-after precious metal, valued for investment, jewelry, and as a safe-haven asset during economic uncertainty."
        },
        silver: {
            name: "Silver",
            symbol: "XAG",
            image: silverIcon,
            description: "Versatile industrial metal with strong investment demand, used in electronics, solar panels, and jewelry manufacturing."
        },
        platinum: {
            name: "Platinum",
            symbol: "XPT",
            image: platinumIcon,
            description: "Rare and dense precious metal, essential for automotive catalysts and jewelry, with limited global supply."
        },
        palladium: {
            name: "Palladium",
            symbol: "XPD",
            image: palladiumIcon,
            description: "Critical industrial metal primarily used in catalytic converters, with growing demand in electronics and dentistry."
        }
    };

    const currentMetal = metalInfo[metal];

    if (loading && !refreshing) return <Loader metal={metal} />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <ScrollView
            className="flex-1 bg-[#051620]"
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={["#FFD700", "#C0C0C0", "#E5E4E2"]}
                    tintColor="#FFD700"
                />
            }
        >
            {/* Header Image Section */}
            <View className="items-center justify-center pt-8 pb-6 bg-[#082739]">
                <View className="bg-[#0c3a52] p-6 rounded-full mb-4">
                    <Image
                        source={currentMetal.image}
                        style={{ width: 96, height: 96 }}
                        resizeMode="contain"
                    />
                </View>
                <Text className="text-white text-3xl font-bold">
                    {currentMetal.name} ({currentMetal.symbol})
                </Text>
                <Text className="text-gray-300 text-center mt-2 px-6">
                    {currentMetal.description}
                </Text>
            </View>

            {/* Current Price Card */}
            <View className="mx-4 mt-6 bg-[#082739] rounded-2xl p-6 border-2 border-[#0c3a52]">
                <Text className="text-gray-300 text-lg">Current Price</Text>
                <Text className="text-white text-4xl font-bold mt-2">
                    ₹{item?.price ? item.price.toFixed(2) : "N/A"}
                </Text>

                <View className="flex-row items-center mt-3">
                    <View className={`px-3 py-1 rounded-full ${item?.ch >= 0 ? 'bg-green-900/30' : 'bg-red-900/30'
                        }`}>
                        <Text className={`text-sm font-bold ${item?.ch >= 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {item?.ch >= 0 ? '↗' : '↘'} {item?.ch >= 0 ? '+' : ''}{item?.ch} ({item?.chp}%)
                        </Text>
                    </View>
                </View>
            </View>

            {/* Price Details Grid */}
            <View className="mx-4 mt-6">
                <Text className="text-white text-xl font-bold mb-4">Price Details</Text>

                <View className="bg-[#082739] rounded-2xl p-5 border-2 border-[#0c3a52]">
                    <View className="space-y-4">
                        {/* Open Price */}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-300 text-base">Open</Text>
                            <Text className="text-white text-lg font-semibold">
                                ₹{item?.open_price ? item.open_price.toFixed(2) : "N/A"}
                            </Text>
                        </View>

                        {/* High Price */}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-300 text-base">High</Text>
                            <Text className="text-green-400 text-lg font-semibold">
                                ₹{item?.high_price ? item.high_price.toFixed(2) : "N/A"}
                            </Text>
                        </View>

                        {/* Low Price */}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-gray-300 text-base">Low</Text>
                            <Text className="text-red-400 text-lg font-semibold">
                                ₹{item?.low_price ? item.low_price.toFixed(2) : "N/A"}
                            </Text>
                        </View>

                        {/* Previous Close */}
                        <View className="flex-row justify-between items-center pt-3 border-t border-[#0c3a52]">
                            <Text className="text-gray-300 text-base">Previous Close</Text>
                            <Text className="text-white text-lg font-semibold">
                                ₹{item?.prev_close_price ? item.prev_close_price.toFixed(2) : "N/A"}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Last Updated */}
            <View className="mx-4 mt-6 mb-8">
                <Text className="text-gray-400 text-sm text-center">
                    Last updated: {new Date().toLocaleString()}
                </Text>
            </View>
        </ScrollView>
    );
}