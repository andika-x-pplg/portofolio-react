import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Index() {
  return (
    <h1 className="mt-4 text-white font-sans text-3xl font-bold">
      <span className="text-white">
        <Typewriter
          words={[
            'React Developer',
            'Laravel Developer',
            'Flutter Developer',
            'Full Stack Web Developer',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
}