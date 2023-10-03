import classes from '../assets/smallSkeleton.module.scss';
type skeletonRowsprops= {
  skeletonRows:number
}
export const SmallSkeleton = ({skeletonRows}:skeletonRowsprops)=>{
  const array: JSX.Element[] = [];

  for(let i =0; i<skeletonRows; i++){
    array.push(<div className={classes.items} key={i}></div>);
  }
  return(
    <div className={classes.container}>
      {array}
    </div>
  );
}

