import {SkeletonLoader} from './features/BigSkeleton';
import { SmallSkeleton } from './features/SmallSkeleton';
import { MobileSkeleton } from './features/mobileskeleton';
export default function App(){
  return(
    <div>
      <MobileSkeleton skeletonRows={[80, 30,50,10,20,60]} />
      <SmallSkeleton skeletonRows={3}/>
      <SkeletonLoader skeletonRows={[6,5,3]}/>
    </div>
  );
}


