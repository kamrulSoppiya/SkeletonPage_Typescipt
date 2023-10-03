import classes from '../assets/skeleton.module.scss';

type ItemsProps = {
  rowNum: number;
}

const Items=({ rowNum }:ItemsProps) => {
  const array2: JSX.Element[] = [];
  for (let i = 0; i < rowNum; i++) {
    array2.push(<div className={classes.item} key={i}></div>);
  }
  return (
    <div className={classes.items}>
      {array2}
    </div>
  );
}

interface SkeletonLoaderProps {
  skeletonRows: number[];
}

export const SkeletonLoader = ({ skeletonRows }:SkeletonLoaderProps) => {
  const array: JSX.Element[] = [];

  for (let i = 0; i < skeletonRows.length; i++) {
    array.push(<Items rowNum={skeletonRows[i]} key={i} />);
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={classes.container}>
          {array}
        </div>
      </div>
    </>
  );
}
