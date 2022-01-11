import {FlatList, View} from 'react-native';
import { RootTabScreenProps } from '../types';
import * as React from "react";
import {useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import {SCHOOLS} from "../graphql/queries/schools";
import {Spinner} from 'native-base';
import SchoolItemCard from "../components/SchoolItemCard";
import theme from "../assets/theme";
import {SchoolInterface} from "../typeDefs/types";
import {handleError} from "../utils";
import {favCounterVar} from "../cache";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [getSchools, { error: schoolError, data: schoolsData }] = useLazyQuery(SCHOOLS);
  const fetchSchools = async ()=>{
     await getSchools()
  }
useEffect(()=>{
     fetchSchools()
},[])
 if(!schoolsData) {
   return <Spinner color={theme.darkestGrey}/>
 }
    const renderItem = ({ item } : {item: SchoolInterface}) => (
        <SchoolItemCard school={item} />
  );

 if(schoolError){
     handleError(schoolError)
 }
  return (
    <View style={{flex:1}}>
      <FlatList
          data={schoolsData.getAllSchools}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          windowSize={4}
          keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}