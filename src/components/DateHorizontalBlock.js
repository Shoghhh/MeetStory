import { StyleSheet, View, Text} from "react-native";
import { AppColors } from "../styles/AppColors";

export default function DateHorizontalBlock({text}){
    return  <View style = {styles.block}>
        <Text style = {styles.text}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    block:{
        backgroundColor:AppColors.SKY_BLUE_COLOR,
        padding:7,
        borderRadius:6,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginRight:8,
    },
    text:{
        color:'#FFFFFF'
    }
 
})