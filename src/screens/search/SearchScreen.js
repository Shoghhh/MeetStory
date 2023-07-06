import React, { useState } from "react";
import Container from "../../components/Container";
import { View, TouchableOpacity, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Styles } from "../../styles/Styles";
import SearchBlock from "../../components/SearchBlock";
import UserBlock from "../../components/UserBlock";


export default function SearchScreen() {
   const [value, setValue] = useState()

   return <Container headerTitle={'Поиск'} filterIcon>
      <SearchBlock value={value} setValue={setValue} />
      <View style={Styles.whiteContainer}>
         <ScrollView style={{ marginTop: 20, }} showsVerticalScrollIndicator={false}>
            {value && <>
               <UserBlock moreIcon activityStatus selected />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
               <UserBlock moreIcon activityStatus />
            </>}
         </ScrollView>
      </View>
   </Container>
}