import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings"

function ListingsScreen({navigation}) {
  const [appoint, setAppoint] = useState()
  useEffect(() => {
    fetch('http://192.168.1.158:8000/api/test/', {
      method:'GET',

    }).then(res => res.json()).then(jsonRes => setAppoint(jsonRes))
  }, [])
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={appoint}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;