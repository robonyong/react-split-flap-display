import React, { useEffect, useState } from 'react';
import Panel, { FlipPanel } from '../Panel';
import defaultSound from '../assets/flip.mp3';
// @ts-expect-error the minified file is not in the type declarations
import { Howl } from 'howler/dist/howler.min.js';
import * as css from './styles.module.scss';

interface Props {
  background: string;
  borderWidth: string;
  borderRadius: string;
  margin: string;
  characterWidth: string | undefined;
  prevValue: string;
  step: number;
  textColor: string;
  value: string;
  withSound?: boolean | string;
}

interface StyleProps extends React.HTMLProps<HTMLDivElement> {
  background: string;
  borderWidth: string;
  characterWidth: string | undefined;
  borderRadius?: string;
  margin?: string;
}

function Character(props: StyleProps) {
  const { children, background, borderWidth, characterWidth, borderRadius, margin, ...rest } = props;
  return (
    <div
      {...rest}
      className={css.wrapper}
      style={{
        '--background': background,
        '--border-width': borderWidth,
        '--character-width': characterWidth,
        '--border-radius': borderRadius,
        '--margin': margin,
      }}
    >
      {children}
    </div>
  );
}

export default function CharacterComponent({
  background,
  borderWidth,
  borderRadius,
  margin,
  characterWidth,
  prevValue,
  step,
  textColor,
  value,
  withSound,
}: Props) {
  const [sound, setSound] = useState<Howl | null>(null);
  const [soundSrc, setSoundSrc] = useState<string | boolean | undefined>();
  useEffect(() => {
    if (withSound !== soundSrc) {
      const newSound = !!withSound
        ? new Howl({
            src: [withSound === true ? defaultSound : withSound],
            onloaderror: (_id: number, error: unknown) => {
              console.warn('ReactSplitFlapDisplay failed to load sound', error);
            },
            onplayerror: (_id: number, error: unknown) => {
              console.warn('ReactSplitFlapDisplay failed to play sound', error);
            },
          })
        : null;
      setSound(newSound);
      setSoundSrc(withSound);
    }
  }, [withSound, sound, soundSrc, setSound, setSoundSrc]);

  useEffect(() => {
    if (prevValue !== value && sound?.state() === 'loaded') {
      // play if the sound will complete within a step
      if (Math.round(sound.duration() * 1000) <= step) {
        const delay = Math.round((step - sound.duration() * 1000) * 0.8);
        setTimeout(() => {
          sound?.play();
        }, delay);
      } else {
        console.warn(
          `ReactSplitFlapDisplay did not play sound; sound duration of ${
            sound.duration() * 1000
          }ms is longer than step duration ${step}ms`,
        );
      }
    }
  }, [prevValue, value, sound, step]);

  useEffect(() => {
    return () => {
      sound?.unload();
    };
  }, [sound]);

  return (
    <Character
      key={`${prevValue}-${value}`}
      background={background}
      borderWidth={borderWidth}
      characterWidth={characterWidth}
      borderRadius={borderRadius}
      margin={margin}
    >
      <Panel position="top" background={background} textColor={textColor} value={value} />
      <Panel position="bottom" background={background} textColor={textColor} value={prevValue} />
      {prevValue !== value && (
        <FlipPanel
          direction="out"
          duration={`${step}ms`}
          position="top"
          background={background}
          textColor={textColor}
          value={prevValue}
        />
      )}
      {prevValue !== value && (
        <FlipPanel
          direction="in"
          duration={`${step}ms`}
          position="bottom"
          background={background}
          textColor={textColor}
          value={value}
        />
      )}
    </Character>
  );
}
