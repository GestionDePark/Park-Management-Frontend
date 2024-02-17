import { Header } from './Header';
import BannerHelloSection from './BannerHelloSection';
import AboutSection from './AboutSection';
import VisitSection from './VisitSection';
import EmployeeSection from './EmployeeSection';
import Footer from './Footer';

const Visitor = () => {
  return (
    <div className="w-full">
      <Header />
      <BannerHelloSection />
      <AboutSection />
      <VisitSection />
      <EmployeeSection />
      <Footer />
    </div>
  );
};

export default Visitor;
