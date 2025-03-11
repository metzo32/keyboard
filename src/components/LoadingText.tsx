import { TypeAnimation } from 'react-type-animation';

export const LoadingText = () => {
  return (
    <TypeAnimation
      sequence={[
        '로딩 중...',
        350, 
        '로딩 중',
        250, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={2}
    />
  );
};