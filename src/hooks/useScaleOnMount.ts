import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useCallback } from 'react';
import { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

export const useScaleOnMount = () => {
    const scale = useSharedValue(0)

    useFocusEffect(useCallback(() => {
        scale.value = withSpring(1)

        return () => {
            scale.value = withSpring(0)
        }
    }, []))

    const styleAnimation = useAnimatedStyle(() => ({
        transform: [
            {
                scale: scale.value
            }
        ]
    }))

    return { styleAnimation }

}