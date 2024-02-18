import React, { Suspense } from 'react';
import Loading from './loading';
import About from '@/components/client/About';

function AboutPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    </main>
  );
}

export default AboutPage;