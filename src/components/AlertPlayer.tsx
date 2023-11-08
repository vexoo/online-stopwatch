import React, { useEffect } from "react";
import { useAppSelector } from "../reducers/hooks";
import { useDebouncedCallback } from "use-debounce";

interface AlertPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AlertPlayer: React.FC<AlertPlayerProps> = ({ audioRef }: AlertPlayerProps) => {
  const audioFile = useAppSelector(state => state.alert.audioFile);
  const soundLevel = useAppSelector(state => state.alert.soundLevel);

  const debouncedSetVolume = useDebouncedCallback(newVolume => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, 400);

  useEffect(() => {
    debouncedSetVolume(soundLevel);
  }, [soundLevel, debouncedSetVolume]);

  return <audio src={audioFile} ref={audioRef} />;
};

export default AlertPlayer;
