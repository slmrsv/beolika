import { Suspense } from 'react';
import { getWorks } from '@/data/work';
import Loading from './loading';
import Works from '@/components/client/Works';

export default async function WorkPage() {
  const works = await getWorks();
      
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Works works={works} />
      </Suspense>
    </main>
  );
}