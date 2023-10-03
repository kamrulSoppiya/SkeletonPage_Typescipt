import {SkeletonLoader} from './features/BigSkeleton';
import { SmallSkeleton } from './features/SmallSkeleton';
import { MobileSkeleton } from './features/mobileskeleton';
export default function App(){
  return(
    <div>
      {/* skeletonRows - MobileSkeleton props taken (height,width) of per skeleton rows */}
      <MobileSkeleton skeletonRows={[80, 30,100]} />
      {/* skeletonRows - Total element of rows */}
      <SmallSkeleton skeletonRows={3}/> 
      {/* skeletonRows -Total rows is length of array and array index is rows of per block */}
      <SkeletonLoader skeletonRows={[10,6,7]}/>
    </div>
  );
}


