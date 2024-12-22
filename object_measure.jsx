import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const DraggablePoint = ({ initialX, initialY, onDragEnd }) => {
  const translateX = useSharedValue(initialX);
  const translateY = useSharedValue(initialY);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  return (
    <PanGestureHandler
      onGestureEvent={({ nativeEvent }) => {
        translateX.value = nativeEvent.translationX + initialX;
        translateY.value = nativeEvent.translationY + initialY;
      }}
      onEnded={({ nativeEvent }) => {
        const finalX = nativeEvent.translationX + initialX;
        const finalY = nativeEvent.translationY + initialY;

        // Snap back to the calculated position
        translateX.value = withSpring(finalX);
        translateY.value = withSpring(finalY);

        onDragEnd(finalX, finalY);
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            width: 30,
            height: 30,
            backgroundColor: 'blue',
            borderRadius: 15,
            position: 'absolute',
          },
        ]}
      />
    </PanGestureHandler>
  );
};

export default function App() {
  const [point1, setPoint1] = useState({ x: 50, y: 50 });
  const [point2, setPoint2] = useState({ x: 60, y: 250 });
  const imageDimensions = { width: 600, height: 400 }; // Replace with your real image dimensions
  const realDimensions = { width: 2, height: 1.33 }; // Real-world dimensions in meters

  const calculateDistance = (point1, point2, imgDimensions, realDimensions) => { /* This is not the best way to calculate length. I am looking for a better formula that links pixels to meter units. Once found, I will get back to you. */
    const { width: imgWidth } = imgDimensions;
    const { width: realWidth } = realDimensions;

    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const distanceInPixels = Math.sqrt(dx * dx + dy * dy);

    const pixelToRealRatio = realWidth / imgWidth; // Width-based scaling
    return (distanceInPixels * pixelToRealRatio).toFixed(2);
  };

  const distance = calculateDistance(point1, point2, imageDimensions, realDimensions); /* This is not the best way to calculate length. I am looking for a better formula that links pixels to meter units. Once found, I will get back to you.*/

  return (
    <GestureHandlerRootView style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <DraggablePoint
        initialX={point1.x}
        initialY={point1.y}
        onDragEnd={(x, y) => setPoint1({ x, y })}
      />
      <DraggablePoint
        initialX={point2.x}
        initialY={point2.y}
        onDragEnd={(x, y) => setPoint2({ x, y })}
      />
      <Text style={styles.distanceText}>Longueur : {distance} m</Text>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.5,
  },
  distanceText: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
