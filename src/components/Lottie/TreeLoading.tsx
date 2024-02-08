import Lottie from 'lottie-react';
import treeData from './data/tree.json';

const TreeLoading = () => {
  return <Lottie animationData={treeData} loop={false} />;
};

export default TreeLoading;
