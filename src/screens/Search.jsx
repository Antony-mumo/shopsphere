import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/index";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState({});

  //http://localhost:3000/api/products/search/${searchKey}
  const handleSearch = () => {
    try {
      const response = axios.get(
        `http://localhost:3000/api/products/search/${searchKey}`
        setSearchResults(response.data)
      );
      console.log("===============");
      console.log(response.data);
      console.log("===============");
      //response.data
    } catch (error) {
      console.log("failed to get products", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View>
          <TouchableOpacity>
            <Ionicons
              name='camera-outline'
              size={SIZES.xLarge}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <TextInput
            styles={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for'
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}>
            <Feather name='search' size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchKey.length === 0 ? (
        View
      ) }
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    marginTop: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});
