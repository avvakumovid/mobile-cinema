import { View, StyleSheet } from 'react-native';
import React, { FC, useEffect, useRef } from 'react';
import { Button } from '@/components/ui';
import { ResizeMode, Video, Audio } from 'expo-av';
import { getMediaSource } from '@/utils/getMediaSource';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useUpdateCountOpened } from './useUpdateCountOpened';

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
  const videoRef = useRef<Video>(null);
  useUpdateCountOpened();

  useEffect(() => {
    const enabledAudio = async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: false,
      });
      await videoRef.current?.stopAsync();
    };

    const _ = enabledAudio();
  }, []);

  return (
    <>
      <Button
        icon='play'
        className='mb-6'
        onPress={async () => {
          await videoRef.current?.presentFullscreenPlayer();
          await videoRef.current?.playAsync();
        }}
      >
        Watch Movie
      </Button>
      <View style={StyleSheet.absoluteFillObject}>
        <Video
          ref={videoRef}
          style={{ height: 180 }}
          source={getMediaSource(video)}
          className='mb-5 w-full hidden absolute'
          shouldPlay
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onFullscreenUpdate={s => {
            if (s.fullscreenUpdate == 1)
              setStatusBarBackgroundColor('black', false);
            else setStatusBarBackgroundColor('transparent', false);
          }}
        />
      </View>
    </>
  );
};

export default VideoPlayer;
