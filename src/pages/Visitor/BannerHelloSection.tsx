import { Button, Typography } from '@mui/material';

const BannerHelloSection = () => {
  return (
    <section className="flex items-center p-4 relative">
      <div className="absolute right-0 w-full h-full flex">
        <img
          alt=""
          src="/landscape-banner.jpeg"
          draggable={false}
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full backdrop-blur absolute top-0 right-0 bg-black bg-opacity-55"></div>
      </div>

      <div className="relative px-3 py-5 mt-[8rem] mb-10 text-white flex flex-col gap-3">
        <div>
          <Typography variant="h3" fontWeight="bold">
            Welcome to MadaPark
          </Typography>
          <Typography variant="h5">Spend a good day in our park</Typography>
        </div>
        <div className="flex items-center gap-4">
          <Button>Contact us</Button>
          <Button variant="outlined" href="#visit">
            Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BannerHelloSection;
