import React, { useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import MetalCard from "../components/MetalCard";
import { useRouter } from "expo-router";

export default function LandingScreen() {
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const metals = [
        { name: "gold", displayName: "Gold — 24K" },
        { name: "silver", displayName: "Silver" },
        { name: "platinum", displayName: "Platinum" },
        { name: "palladium", displayName: "Palladium" }
    ];

    const onRefresh = async () => {
        setRefreshing(true);
        setRefreshKey(prev => prev + 1);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    };

    return (
        <ScrollView
            className="flex-1 bg-[#051620] p-4"
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={["#FFD700", "#C0C0C0", "#E5E4E2"]} // Android
                    tintColor="#FFD700" // iOS
                />
            }
        >
            <View className="m-2 mt-6 mb-6">
                <Text className="text-2xl font-bold text-white">Precious Metals</Text>
                <Text className="text-sm text-gray-300 mt-1">Tap a metal to see details</Text>
            </View>

            {metals.map((metal) => (
                <MetalCard
                    key={`${metal.name}-${refreshKey}`}
                    metal={metal.name}
                    displayName={metal.displayName}
                    onPress={() => router.push(`/detail/${metal.name}`)}
                />
            ))}
        </ScrollView>
    );
}