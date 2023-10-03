import classes from '../assets/mobileskeleton.module.scss';

interface MobileSkeletonProps {
  skeletonRows: number[];
}

export const MobileSkeleton = ({ skeletonRows }:MobileSkeletonProps) => {

  function dynamicStyles(i: number): React.CSSProperties {
    return {
      height: skeletonRows ? `${skeletonRows[i]}px` : '40px',
      width: skeletonRows ? `${skeletonRows[i]}px` : '40px',
      backgroundColor: '#E4E5E7',
    }
  }

  const array: React.ReactNode[] = [];
  for (let i = 0; i < skeletonRows.length; i++) {
    array.push(<div key={i} className={`${classes.items}`} style={dynamicStyles(i)}></div>);
  }

  return (
    <div className={classes.container}>
      {array}
    </div>
  )
}
