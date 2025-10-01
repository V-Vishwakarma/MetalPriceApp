// app/detail/[metal].tsx
import React from "react";
import { useLocalSearchParams } from "expo-router";
import DetailScreen from "../src/screens/DetailScreen";


export default function MetalDetailWrapper() {
    const { metal } = useLocalSearchParams(); 
    return <DetailScreen metal={metal as string} />;
}
