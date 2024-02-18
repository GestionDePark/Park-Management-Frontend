const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="center-flex flex-col text-[.85rem] pb-5">
      <span className="font-bold">Copyright © ParkMada - {year}</span>
      <span>All rights reserved</span>
    </div>
  );
};

export default Copyright;
