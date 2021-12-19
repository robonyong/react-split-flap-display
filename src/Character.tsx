import * as React from 'react';
import styled from 'styled-components';

import Panel, { FlipPanel } from './Panel';
import defaultSound from './assets/flip.mp3';
import { Howl } from 'howler';

type Props = {
  background: string;
  borderWidth: string;
  characterWidth: string | null | undefined;
  prevValue: string;
  step: number;
  textColor: string;
  value: string;
  withSound?: boolean | string;
};

type StyleProps = {
  background: string;
  borderWidth: string;
  characterWidth: string | null | undefined;
};

const Character = styled.div<StyleProps>`
  background: ${({ background }): string => background};
  display: flex;
  justify-content: center;
  width: ${({ characterWidth }): string => characterWidth || 'initial'};
  padding: 0.5em;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 5;
    background: transparent;
    border-bottom: ${({ background, borderWidth }): string => `${background} ${borderWidth} solid`};
  }
`;

const CharacterComponent: React.FC<Props> = ({
  background,
  borderWidth,
  characterWidth,
  prevValue,
  step,
  textColor,
  value,
  withSound,
}) => {
  const sound = React.useMemo(() => {
    if (sound) {
      sound.unload();
    }
    if (!withSound) {
      return null;
    }
    const newSound = new Howl({
      src: [withSound === true ? defaultSound : withSound],
      onloaderror: (_id, error) => {
        console.error('failed to load sound', error);
      },
      onplayerror: (_id, error) => {
        console.warn('failed to play sound', error);
      },
    });
    return newSound;
  }, [withSound]);

  React.useEffect(() => {
    if (prevValue !== value && sound?.state() === 'loaded') {
      // play if the sound will complete within a step
      if (Math.round(sound.duration() * 1000) <= step) {
        const delay = Math.round((step - sound.duration() * 1000) / 2);
        setTimeout(() => {
          if (sound) {
            sound.play();
          }
        }, delay);
      }
    }
  }, [prevValue, value, sound, step]);

  React.useEffect(() => {
    return () => {
      if (sound) {
        sound.unload();
      }
    };
  }, []);

  return (
    <Character background={background} borderWidth={borderWidth} characterWidth={characterWidth}>
      <Panel position="top" background={background} textColor={textColor} value={value} />
      <Panel position="bottom" background={background} textColor={textColor} value={prevValue} />
      {prevValue !== value && (
        <FlipPanel
          direction="out"
          duration={step / 1000}
          position="top"
          background={background}
          textColor={textColor}
          value={prevValue}
        />
      )}
      {prevValue !== value && (
        <FlipPanel
          direction="in"
          duration={step / 1000}
          position="bottom"
          background={background}
          textColor={textColor}
          value={value}
        />
      )}
    </Character>
  );
};

export default CharacterComponent;
