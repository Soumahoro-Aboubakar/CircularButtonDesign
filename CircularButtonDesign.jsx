import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const CircularButtonDesign = () => {
  return (
    <View style={styles.container}>
   
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.logo}
        />
      </View>

    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.topButton]}>
          <Text style={styles.buttonText}>Solve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <Text style={styles.buttonText}>Summarize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.topRightButton]}>
          <Text style={styles.buttonText}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Text style={styles.buttonText}>Rewrite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.bottomLeftButton]}>
          <Text style={styles.buttonText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.bottomRightButton]}>
          <Text style={styles.buttonText}>Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.topLeftButton]}>
          <Text style={styles.buttonText}>Write</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttonContainer: {
    position: "relative",
    width: 300, 
    height: 300, 
  },
  button: {
    position: "absolute",
    width: 70,
    height: 50,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  topButton: {
    top: -25,
    left: "50%",
    transform: [{ translateX: -35 }],
  },
  rightButton: {
    top: "50%",
    right: -30, 
    transform: [{ translateY: -25 }],
  },
  topRightButton: {
    top: "10%",
    right: "0%",
    transform: [{ translateX: -35 }],
  },
  leftButton: {
    top: "50%",
    left: -30, 
    transform: [{ translateY: -25 }],
  },
  bottomLeftButton: {
    bottom: "10%",
    left: "10%", 
  },
  bottomRightButton: {
    bottom: "10%",
    right: "10%",
  },
  topLeftButton: {
    top: "10%",
    left: "10%",
  },
});


export default CircularButtonDesign;