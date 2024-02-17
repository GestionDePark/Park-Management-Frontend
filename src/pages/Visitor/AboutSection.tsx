import { FormatQuote } from '@mui/icons-material';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-12">
      <h2 className="text-center text-4xl font-bold">About us </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <FormatQuote fontSize="large" />
          <p className="text-2xl">We manage the big park in Antananarivo</p>
          <FormatQuote fontSize="large" />
        </div>
        <div className="text-lg">
          <p>We got a park with many activities and purpose services</p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
