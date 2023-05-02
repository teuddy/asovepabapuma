import { useState, useEffect,useRef } from 'react';
import {StatusBar, View, Animated } from 'react-native';


//https://pbs.twimg.com/media/FZlDLtkWYAEE4oa.jpg\


const images = [
    { uri: 'https://i.ytimg.com/vi/YchlbiP53xo/maxresdefault.jpg' },
    { uri: 'https://pbs.twimg.com/media/FZlDLtkWYAEE4oa.jpg' },
  ];
  


const Slider = ()=>{

    const [index, setIndex] = useState(0);
    const opacity = useRef(new Animated.Value(0)).current;



  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);

    useEffect(() => {
      const timer = setTimeout(() => {
        const nextIndex = index === images.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
      }, 3000);
      return () => clearTimeout(timer);
    }, [index]);

    const currentImage = images[index];
    return(
        <View>
            <StatusBar translucent={true}/>
            <Animated.Image source={currentImage}
            style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.8  }}
            />
        </View>
    )
}

export default Slider;
