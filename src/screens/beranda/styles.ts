import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
  },
  carouselBox: {
    width: "100%",
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuBox: {
    width: "100%",
    height: "15%",
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  articlesBox: {
    width: "100%",
    height: "59%",
    marginTop: 10,
    paddingVertical: 10,
  },
});

export default styles;
