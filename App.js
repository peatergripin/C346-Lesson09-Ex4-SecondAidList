import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SectionList } from "react-native";
import medicalEquipmentData from "./medicalEquipmentData";

export default function App() {
  function renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
    );
  }

  function renderSectionHeader({ section: { title, color, icon } }) {
    return (
      <View style={[styles.sectionHeader, { backgroundColor: color }]}>
        <Text style={styles.sectionTitle}>
          {icon} {title}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={medicalEquipmentData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#e7e6f8",
    borderWidth: 1,
    // borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // marginBottom: 2,
  },
  listContent: {
    paddingBottom: 30,
    margin: 10,
  },
  sectionHeader: {
    alignItems: "center",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },

  image: {
    width: 150,
    height: 220,
    resizeMode: "contain",
  },
});
