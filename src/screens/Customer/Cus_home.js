import React, { useState } from "react";
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { DataTable } from 'react-native-paper';


import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

// const optionsPerPage = [2, 3, 4];

const Cus_home = ({ navigation }) => {

  // const [page, setPage] = React.useState<number>(0);
  // const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  // React.useEffect(() => {
  //   setPage(0);
  // }, [itemsPerPage]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/menu.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18}}>
            Hello John Doe
          </Text>
      
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View
      style={styles.fabcontainer}>
          <Badge 
          style={styles.badge}
          accessibilityLabel="sachi">3</Badge>
          <Badge style={styles.badge}>3</Badge>
          <Badge style={styles.badge}>3</Badge>
      </View>

      <View
       style={styles.tablecontainer}>

      <DataTable>
        <Text
        style={{fontSize: 20,
                color: "#fff",
                fontWeight: '500',
                backgroundColor: "#2538B8"}}>Recently placed jobs</Text>
        <DataTable.Header>
          <DataTable.Title >#</DataTable.Title>
          <DataTable.Title>Job Title</DataTable.Title>
          <DataTable.Title>Service Provider</DataTable.Title>
          <DataTable.Title>Date of job done</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>Plumbing</DataTable.Cell>
          <DataTable.Cell>John Perera</DataTable.Cell>
          <DataTable.Cell>2022/08/02</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Painting</DataTable.Cell>
          <DataTable.Cell>Nimal Guruge</DataTable.Cell>
          <DataTable.Cell>2022/08/10</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>Electrical</DataTable.Cell>
          <DataTable.Cell>Larry Joe</DataTable.Cell>
          <DataTable.Cell>2022/08/23</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>4</DataTable.Cell>
          <DataTable.Cell>Masonary</DataTable.Cell>
          <DataTable.Cell>Sugath Perera</DataTable.Cell>
          <DataTable.Cell>2022/06/02</DataTable.Cell>
        </DataTable.Row>

        {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}

      </DataTable>
      </View>
      </ScrollView>


      

      {/* <View
        style={styles.fabcontainer}
      >
          <FAB
              // icon="plus"
              label="20"
              accessibilityLabel="service"
              testID="service"
              style={styles.fab}
              onPress={() => console.log('Pressed')}
          />
          <FAB
              // icon="plus"
              label="20"
              style={styles.fab}
              onPress={() => console.log('Pressed')}
          />
           <FAB
              // icon="plus"
              label="30"
              style={styles.fab}
              onPress={() => console.log('Pressed')}
          />
      </View> */}

    </SafeAreaView>  
  );
};

    const styles = StyleSheet.create({
      fab: {
        // position: 'absolute',
        margin: 10,
        left: 0,
        height:96,
        width:96,
        justifyContent: "center",
        fontSize: 40,
        // fontWeight: 250,
        // borderRadius:48,
        // top: 80,
      },

      fabcontainer: {
        justifyContent:"space-around",
        backgroundColor: 'green',
        display: "flex",
        flexDirection: "row",
        flex: 2,
      },

      badge:{
        size: 50,
        height: 50,
        width: 50,
        marginBottom: 20,
        // borderRadius: 25,
        justifyContent: "center",
        fontSize:25,
        backgroundColor: "blue",
      },

      tablecontainer: {
        // paddingTop: 100,
        // paddingHorizontal: 30,
        display: 'flex',
        flex: 3,
        // marginLeft: 10,
        // marginRight: 10,
      }, 
    })

export default Cus_home;
