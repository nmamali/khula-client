import {FlatList, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {GET_SCHOOLS_BY_ID} from "../graphql/queries/getSchoolByIds";
import {useQuery, useReactiveVar} from "@apollo/client";
import {favCounterVar} from "../cache";
import {Card, Spinner} from "native-base";
import theme from "../assets/theme";
import {SchoolInterface} from "../typeDefs/types";
import SchoolItemCard from "../components/SchoolItemCard";
import * as React from "react";
import {Entypo} from "@expo/vector-icons";
import {handleError} from "../utils";

export default function FavouritesScreen() {

  const favCounter = useReactiveVar(favCounterVar);

  const { data: schoolsData ,error} = useQuery(GET_SCHOOLS_BY_ID, {
    variables: { ids: favCounter },
  });


  if(error){
      handleError(error)
  }
  if(!schoolsData){
    return <Spinner color={theme.darkestGrey} />
  }

  if(schoolsData?.getSchoolsByIds?.length ===0){
      return <Card style={localStyles.emptyContainer}>
        <Entypo name={"emoji-sad"} size={100} color={theme.darkestGrey}/>
        <Text style={{}}> No saved Schools </Text>
      </Card>
  }
  const renderItem = ({ item } : {item: SchoolInterface}) => (
      <SchoolItemCard school={item} />
  );
  return (
      <View style={{flex:1}}>
        <FlatList
            data={schoolsData.getSchoolsByIds}
            renderItem={renderItem}
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            windowSize={4}
            keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}

const localStyles = StyleSheet.create({
    emptyContainer: {
        height: 200,
        alignItems:"center",
        alignContent:"center",
        paddingVertical: 30
    },
    emptyTitle: {
        textAlign:"center",
        marginTop: 10,
        color:theme.darkestGrey,
        fontWeight: "bold",
        fontSize:22
    },

});
