import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import { data } from "../../data";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          {data.title}
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {data.description}
        </Text>
      </View>

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
            value=''
            onPressIn={() => navigation.navigate("Search")}
            placeholder={data.search_placeholder}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 11,
    marginTop: top,
    color: color,
    marginHorizontal: SIZES.small,
  }),
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

export default Welcome;
