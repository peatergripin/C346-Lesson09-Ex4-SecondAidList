# 🌙 C346 Week05 Lesson10 Exercise 4 (Healthcare Equipments Catalogue)

[![Module](https://img.shields.io/badge/Module-C346%20Mobile%20App%20Development-6A5ACD?logo=android&logoColor=white)](#)
[![Platform](https://img.shields.io/badge/Platform-Android-2E8B57?logo=android&logoColor=white)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20React%20Native-61DAFB?logo=react&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-success)](#)

---

## 📝 Overview

Lessons 9 & 10 taught us on FlatLists and SectionLists, both of which acceepts data in the form of an array and a renderer function which helps render each element in the array. SectionList however have additional parameters that can be passed such as renderSectionHeader.

> ✨ _Example:_ Implemented FlatLists and SectionLists to display data in React Native.

---

## 🎬 Demo / Media

<p align="center">
  <img src="./assets/img/C346-Lesson09-Ex4.gif" alt="App Demo" />
</p>
<p align="center">
  <img src="./assets/img/screenshot1.png" width="180" alt="Screenshot1" />
  <img src="./assets/img/screenshot2.png" width="180" alt="Screenshot2" />
</p>

---

## 🚀 Features

- ✅ FlatLists
- ✅ SectionLists

---

## 💡 Key Concepts

| Concept         | Description                                                                           |
| :-------------- | :------------------------------------------------------------------------------------ |
| **FlatList**    | Helps with long scrolling list of similarly structured data.                          |
| **SectionList** | This is used if a list of items needs to be split and displayed in multiple sections. |

---

## 🧱 Code Snippet

```jsx
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
```
