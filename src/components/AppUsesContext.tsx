import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Circle = () => {
  return <div className="bg-current w-[.5rem] h-[.5rem] rounded-full"></div>;
};

const AppUsesContext = () => {
  return (
    <div className="flex flex-col gap-2">
      <nav className="center-flex gap-4 text-[.95rem]">
        <Link to="#">About</Link>
        <Circle />
        <Link to="#">Privacy Policy</Link>
        <Circle />
        <Link to="#">Legacy</Link>
        <Circle />
        <Link to="#">Help</Link>
      </nav>
      <Copyright />
    </div>
  );
};

export default AppUsesContext;
