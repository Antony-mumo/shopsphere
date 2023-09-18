import { Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import Welcome from "../components/home/Welcome";
import ProductRow from "../components/products/ProductRow";
import { COLORS, SIZES } from "../constants/index";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Nairobi, Kenya</Text>
          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cardNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollview}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartContainer: {
    position: "relative",
    alignItems: "flex-end",
  },
  cartCount: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cardNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 9,
    color: COLORS.lightWhite,
  },
  scrollview: {
    flex: 1,
  },
});

export default Home;
