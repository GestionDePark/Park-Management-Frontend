const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const StyledDate = (date: string) => {
  const d: Date = new Date(date);
  return months[d.getMonth()] + ', ' + d.getDate() + ' ' + d.getFullYear();
};

export default StyledDate;
