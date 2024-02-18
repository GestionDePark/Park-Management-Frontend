import AppLogo from '@/components/AppLogo';
import { Link } from 'react-router-dom';
import {
  Email,
  Facebook,
  Instagram,
  LocationOnOutlined,
  Phone,
  WhatsApp,
  X,
} from '@mui/icons-material';
import Copyright from '@/components/Copyright';
import { Divider } from '@mui/material';
import pageRoutes from '@/pageRoutes';
import AppProperty from '@/assets/appProperty';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 bg-zinc-100">
      <div className="p-3 flex items-center justify-between">
        <AppLogo />

        <div className="flex flex-col items-center justify-center px-4">
          <span className="text-[1.25rem]">Follows us on</span>
          <div className="center-flex gap-2">
            <Link to="#">
              <Facebook />
            </Link>
            <Link to="#">
              <Instagram />
            </Link>
            <Link to="#">
              <WhatsApp />
            </Link>
            <Link to="#">
              <X />
            </Link>
          </div>
        </div>
      </div>

      <Divider />

      <div className="flex justify-between px-5 pt-3">
        <div className="w-full flex flex-col gap-4">
          <span className="font-bold text-xl">
            Pass a wonderful day at the park
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Phone />
              <span>{AppProperty.contact}</span>
            </div>
            <div className="flex items-center gap-2">
              <Email />
              <span>{AppProperty.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <LocationOnOutlined />
              <span>{AppProperty.location}</span>
            </div>
          </div>
        </div>

        <nav className="flex flex-col w-full items-center gap-3">
          <Link to={pageRoutes.adminJobs}>Jobs</Link>
          <Link to={pageRoutes.adminDashboard}>Administrator</Link>
          <Link to="#">Legacy</Link>
          <Link to="#">Hiring</Link>
        </nav>

        <nav className="flex flex-col w-full items-center gap-3">
          <Link to="#">About us</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Help</Link>
        </nav>

        <nav className="flex flex-col w-full text-end items-end gap-3">
          <Link to="#">Blog</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Terms of use</Link>
        </nav>
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
