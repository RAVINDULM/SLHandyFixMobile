import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

// import rating dependancy
import { Rating, AirbnbRating } from "react-native-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";

// chart config for line chart
const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFromOpacity: 40,
  backgroundGradientToOpacity: 40,
  backgroundGradientFrom: "#0575E6",
  backgroundGradientTo: "#09A6F3",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 20,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#fff",
  },
};

const ServPro_home = ({ navigation }) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  // data for pie chart
  const datapie = [
    {
      name: "January",
      population: 20,
      color: "#0575E6",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Febdruary",
      population: 10,
      color: "#0681E9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "March",
      population: 5,
      color: "#078EED",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "April",
      population: 50,
      color: "#089AF0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "May",
      population: 5,
      color: "#09A6F3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  // data for line chart
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        data: [20, 45, 28, 80],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Customer trafic"], // optional
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        {/* <AirbnbRating
          count={11}
          reviews={[
            "Terrible",
            "Bad",
            "Meh",
            "OK",
            "Good",
            "Hmm...",
            "Very Good",
            "Wow",
            "Amazing",
            "Unbelievable",
            "Jesus",
          ]}
          defaultRating={11}
          size={20}
        /> */}

        {/* ---------------------------------------------------- start rating --------------------------------------------------------------------- */}
        <Card
          style={{
            margin: 10,
            borderRadius: 10,
            // backgroundColor: "#F3F5F7"
          }}
        >
          <Card.Content>
            <Title>Your Rating</Title>
            <Paragraph>Current rating</Paragraph>
            {/* <Card.Cover></Card.Cover> */}
            <View style={{ marginRight: 35 }} isDisabled={true}>
              <Rating
                showRating
                isDisabled={false}
                // ratingContainerStyle={{
                //   backgroundColor: "yellow",
                //   padding: 10,
                // }}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
            </View>
          </Card.Content>
        </Card>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Card
            style={{
              margin: 10,
              borderRadius: 10,
              // backgroundColor: "#F3F5F7"
            }}
          >
            <Card.Content>
              <Title style={{ fontSize: 15 }}>Jobs Completed</Title>
              <Paragraph></Paragraph>
              {/* <Card.Cover></Card.Cover> */}
              <View
                style={{ marginRight: 35, flex: 1, flexDirection: "row" }}
                isDisabled={true}
              >
                <Title style={{ fontSize: 30, marginRight: 20 }}>56</Title>
                <FontAwesomeIcon icon={faCheck} color={"green"} size={24} />
              </View>
            </Card.Content>
          </Card>

          <Card
            style={{
              margin: 10,
              borderRadius: 10,
              // backgroundColor: "#F3F5F7"
            }}
          >
            <Card.Content>
              <Title style={{ fontSize: 15 }}>Total complaints</Title>

              <Paragraph></Paragraph>
              {/* <Card.Cover></Card.Cover> */}
              <View
                style={{ marginRight: 35, flex: 1, flexDirection: "row" }}
                isDisabled={true}
              >
                <Title style={{ fontSize: 30, marginRight: 20 }}>20</Title>
                <FontAwesomeIcon icon={faWarning} color={"red"} size={24} />
              </View>
            </Card.Content>
          </Card>
        </View>
        {/* ---------------------------------------------------- line chart --------------------------------------------------------------------- */}
        <Card
          style={{ backgroundColor: "#F3F5F7", margin: 10, borderRadius: 10 }}
        >
          <Card.Content>
            <Title>Jobs</Title>
            <Paragraph>Jobs overview</Paragraph>
            {/* <Card.Cover></Card.Cover> */}
            <View style={{ marginRight: 35 }}>
              <LineChart
                data={data}
                width={270}
                height={200}
                chartConfig={chartConfig}
              />
            </View>
          </Card.Content>
        </Card>

        <Card
          style={{ backgroundColor: "#F3F5F7", margin: 10, borderRadius: 10 }}
        >
          <Card.Content>
            <Title>Customer Trafic</Title>
            <Paragraph>Customer Trafic</Paragraph>
            {/* <Card.Cover></Card.Cover> */}
            <View style={{ marginRight: 35 }}>
              <PieChart
                data={datapie}
                width={280}
                height={180}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"5"}
                // padding={"5"}
                center={[0, 20]}
                absolute
              />
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServPro_home;
