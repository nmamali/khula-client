import {Linking, Platform, StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import * as React from "react";
import {Button, Card, Left, Right} from 'native-base';
import ImageCaching from "../components/ImageCaching";
import theme from "../assets/theme";
import MapIcon from "./khula-icons/MapIcon";
import SchoolIcon from "./khula-icons/SchoolIcon";
import {SchoolInterface} from "../typeDefs/types";
import {AntDesign} from "@expo/vector-icons";
import {saveToFav} from "../utils";
import {favCounterVar} from "../cache";
import {useReactiveVar} from "@apollo/client";
interface SchoolItemCard{
    navigation?:any,
    school:SchoolInterface,
}
export default function SchoolItemCard({ navigation , school}: SchoolItemCard) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${school.longitude},${school.latitude}`;
    const label = school.name;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });

    const navigateToSchool = async ()=>{
        if (typeof url === "string") {
            await Linking.openURL(url);
        }

    }
    const favCounter = useReactiveVar(favCounterVar);

    return (
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <View style={{marginLeft:10}}>
                <View style={{flexDirection:"row"}}>
                    <Left style={{flexDirection:"row"}}>
                        <ImageCaching path={school?.imageLink} />
                        <View>
                            <Text style={styles.title}>{" "}{school?.name}</Text>
                            <Text style={styles.subTitle}>{" "} A great public school in 4ways for grades 1-12</Text>
                        </View>
                    </Left>
                </View>
                <View style={styles.separator}/>

                <View style={{flexDirection:"row"}}>
                       <MapIcon fill={theme.darkestGrey} style={{height: 19, width: 19, marginTop: 6}}/>
                       <Text style={styles.subTitle}> {school?.address}</Text>
                        <Right style={{marginRight: 7}} >

                            {favCounter.includes(school?.id+"") &&<AntDesign
                               color={"#38587D"}
                               size={20}
                               name={"heart"}
                               onPress={()=>{
                                   saveToFav(school?.id.toString())
                               }}
                           />}
                            {!favCounter.includes(school?.id+"") &&<AntDesign
                                color={theme.darkestGrey}
                                size={20}
                                name={"hearto"}
                                onPress={()=>{
                                    saveToFav(school?.id.toString())
                                }}
                            />}


                        </Right>
                </View>
                </View>
                <View style={{flexDirection:"row", marginVertical: 10}}>
                    <View style={{flex:1}}>
                        <Button style={styles.button}>
                            <View style={{marginHorizontal:50, flexDirection: "row"
                            }}>
                                <SchoolIcon fill={"#38587D"} style={{height: 21, width: 21, marginRight:5, bottom: 4}}/>

                                <Text style={{textAlign:"center", color:"#38587D" }}>View School</Text>
                            </View>
                        </Button>
                    </View>

                    <View style={{flex:1}}>
                        <Button
                            onPress={async ()=>{
                                await navigateToSchool()
                            }}
                            style={[styles.button, styles.buttonSubStyle]}>
                            <View style={{marginHorizontal:50, backgroundColor:"#38587D", flexDirection: "row"
                            }}>
                                <MapIcon fill={theme.white} style={{height: 19, width: 19}}/>

                                <Text style={{textAlign:"center", color:"#FFF" }}>Open Map</Text>
                            </View>
                        </Button>
                    </View>
                </View>
            </Card>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF",
        paddingHorizontal: 5,
        marginBottom: 70
    },
    title: {
        fontSize:20,
        fontWeight:"normal",
        flexShrink: 1,
        color: theme.darkestGrey
    },
    separator: {
        borderStyle: 'dotted',
        borderWidth: 0.9,
        marginVertical: 5,
        borderColor: "lightgrey"
    },
    cardContainer: {
        shadowColor: theme.darkestGrey,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    subTitle: {
        fontWeight:"normal" ,
        paddingTop: 6,
        color: theme.darkestGrey
    },
    button:{
        width:"100%",
        backgroundColor:"#FFF",
        borderWidth:1,
        borderColor:"#38587D",
        height:"54%",
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        alignContent:"center",
        alignItems:"center",
    },
    buttonSubStyle: {
        backgroundColor:"#38587D",
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0,
    }
});
