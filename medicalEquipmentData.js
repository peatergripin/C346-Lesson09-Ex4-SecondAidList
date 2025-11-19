const medicalEquipmentData = [
  /***************** 
      Mobility
******************/
  {
    title: "Mobility",
    icon: "👨‍🦽‍➡️",
    data: [
      {
        name: "Wheelchair",
        imageUrl: require("./assets/img/WheelChair1.jpg"),
        description: "Lightweight alloy frame.",
        price: 80,
      },
      {
        name: "Walking Stick",
        imageUrl: "./assets/img/WalkingStick4.jpg",
        description: "Foldable aluminium frame.",
        price: 20,
      },
      {
        name: "Crutches",
        imageUrl: require("./assets/img/Crutches4.jpg"),
        description: "Standard pair with rubber tips.",
        price: 15,
      },
    ],
  },

  /************************* 
    Monitoring & Diagnostics
**************************/
  {
    title: "Monitoring & Diagnostics",
    icon: "🩺",
    data: [
      {
        name: "Heart Rate Monitor",
        imageUrl: require("./assets/img/HeartRateMonitor1.jpg"),
        description: "Digital HR monitor.",
        price: 25,
      },
      {
        name: "Stethoscope",
        imageUrl: require("./assets/img/stethoscope1.jpg"),
        description: "Medical-grade chestpiece.",
        price: 18,
      },
    ],
  },
  /************************* 
    Miscellaneous
**************************/ {
    title: "Miscellaneous",
    icon: "🩺",
    data: [
      {
        name: "Hand Sanitiser",
        imageUrl: require("./assets/img/sanitiser3.jpg"),
        description: "500ml alcohol-based.",
        price: 2,
      },
      {
        name: "Face Masks",
        imageUrl: require("./assets/img/mask4.jpg"),
        description: "Breathable material.",
        price: 3,
      },
    ],
  },
];

export default medicalEquipmentData;
