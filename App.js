import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SectionList,
  Image,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import medicalEquipmentData from "./medicalEquipmentData";

export default function App() {
  function handleOnClick({ item }) {
    Alert.alert(`😃 ${item.name}`, item.description, [
      { text: "❌", type: "cancel" },
      {
        text: "🛒Add to Cart?",
        onPress: () =>
          ToastAndroid.show(`${item.name} added to cart`, ToastAndroid.SHORT),
      },
    ]);
  }
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleOnClick({ item })}
      >
        <View style={styles.itemImageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
        </View>
        <View style={styles.itemText}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
          <View>
            <Text>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderSectionHeader({ section: { title, icon } }) {
    return (
      <View style={[styles.sectionHeader]}>
        <Text style={styles.sectionTitle}>
          {icon} {title}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainHeaderContainer}>
        <Text style={styles.mainHeader}>🏥 Healthcare Equipments</Text>
      </View>
      <SectionList
        sections={medicalEquipmentData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 50,
        }}
      />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FDFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingTop: 0,
  },
  mainHeaderContainer: {
    elevation: 15,
    zIndex: 2,
    backgroundColor: "#DBECFF",
    width: "100%",
    flexDirection: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 15,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 14,
    flex: 0.48,
    elevation: 2,
    overflow: "hidden",
    padding: 10,
  },
  listContent: {
    paddingBottom: 30,
    margin: 10,
  },
  sectionHeader: {
    alignItems: "center",
    backgroundColor: "#0d47a1",
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },

  image: {
    width: 300,
    height: 220,
    resizeMode: "contain",
  },
  itemText: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
  },
  itemName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  itemImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  itemPrice: {
    fontSize: 17,
    color: "green",
    fontWeight: "bold",
  },
});
