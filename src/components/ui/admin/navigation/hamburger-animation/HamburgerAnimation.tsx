import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { useHamburgerAnimation } from './useHamburgerAnimation';
import Animated from 'react-native-reanimated';

const className = 'w-6 h-0.5 bg-[#ECF0F1]';

const HamburgerAnimation: FC<{ isShow: boolean }> = ({ isShow }) => {
  const animation = useHamburgerAnimation(isShow);

  return (
    <Animated.View style={animation.styleAnimation}>
      <Animated.View
        className={className}
        style={animation.transformFirstLineAnimation}
      />
      <Animated.View
        className={className}
        style={animation.widthSecondLineAnimation}
      />
      <Animated.View
        className={className}
        style={animation.widthThirdLineAnimation}
      />
    </Animated.View>
  );
};

export default HamburgerAnimation;
