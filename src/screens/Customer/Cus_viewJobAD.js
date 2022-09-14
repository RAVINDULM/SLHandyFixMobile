import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton";

const ServPro_Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
        // alignItems: "center",
        // backgroundColor: 'yellow'
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
      </View>

      <ScrollView style={{ padding: 20 }}>
        {/*---------------------------------------------------------- Profile picture section -----------------------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <ImageBackground
            source={require("../../assests/imgs/User01.jpg")}
            style={{ width: 80, height: 80 }}
            imageStyle={{ borderRadius: 60 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              // paddingLeft: 30,
              // backgroundColor: 'red'
            }}
          >
            <View style={{flexDirection: "column",alignItems: "center",}}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}> Saman Bandara</Text>
            </View>

          </View>
        </View>

        {/*---------------------------------------------------------- ad details heading section---------------------------------------------------------- */}
        <View style={{ paddingTop: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>ADVERTISEMENT DETAILS</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        {/*---------------------------------------------------------- ad details heading section ----------------------------------------------------------*/}

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Job Title</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 150}}>Painting work</Text>
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Category</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 150}}>Painter</Text>
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Location</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 150}}>Matara</Text>
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Posted Date</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 150}}>08/09/2022</Text>
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Due Date</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 150}}>20/09/2022</Text>
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Description</Text>
          <Text style={{ paddingLeft: 30, fontSize: 16, width: 200}}>I’m searching experienced plumber for repair my house. 
                                    Please apply if you have experienced that duty. Size : width 300 feets and length 20 feets</Text>
         
        </View>

        <View style={styles.textViewStyle}>
          <Text style={styles.textstyle}>Images</Text>
          <ImageBackground
              source={require("../../assests/imgs/house.jpg")}
              style={{ width: 240, height: 240}}
            />
        </View>

 </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textstyle:{
        paddingLeft: 10,
        fontSize: 16,
        // paddingRight: 10,
        fontWeight: "bold",
        width: 100,
    },
    textViewStyle:{
        flexDirection: "row",
        // justifyContent: 'center',
        alignItems: "center",
        marginTop:10 ,
        marginBottom:10,
        marginRight:10,
    }
})
export default ServPro_Profile;