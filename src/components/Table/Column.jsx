import Periods from "./Periods";

const MondayColumn = ({ day, data }) => {
  const mondayPeriods = data?.map((e) => {
    let periodsArray = e.period.split(" - ");
    e.period = periodsArray
      .filter((period) => period.startsWith(`${day}`))
      .join(" - ");
    return e;
  });
  const mondayMorningPeriods = mondayPeriods
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith(`${day}M`))
        ? e
        : [];
    })
    .filter(Boolean);
  const mondayAfternoonPeriods = mondayPeriods
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith(`${day}T`))
        ? e
        : [];
    })
    .filter(Boolean);
  const mondayNightPeriods = mondayPeriods
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith(`${day}N`))
        ? e
        : [];
    })
    .filter(Boolean);

  return (
    <>
      <Periods period={"M"} data={mondayMorningPeriods} />
      <Periods period={"T"} data={mondayAfternoonPeriods} />
      <Periods period={"N"} data={mondayNightPeriods} />
    </>
  );
};

export default MondayColumn;
