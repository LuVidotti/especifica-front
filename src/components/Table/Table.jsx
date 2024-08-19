import Column from "./Column";

const Table = ({ data }) => {
  const cleanedMondayData = data
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith("2")) ? e : [];
    })
    .filter(Boolean);
  const cleanedTuesdayData = data
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith("3")) ? e : [];
    })
    .filter(Boolean);
  const cleanedWednesdayData = data
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith("4")) ? e : [];
    })
    .filter(Boolean);
  const cleanedThursdayData = data
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith("5")) ? e : [];
    })
    .filter(Boolean);
  const cleanedFridayData = data
    ?.flatMap((e) => {
      const periodsArray = e.period.split(" - ");
      return periodsArray.some((period) => period.startsWith("6")) ? e : [];
    })
    .filter(Boolean);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Column day={"2"} data={cleanedMondayData} />
        </div>
        <div>
          <Column day={"3"} data={cleanedTuesdayData} />
        </div>
        <div>
          <Column day={"4"} data={cleanedWednesdayData} />
        </div>
        <div>
          <Column day={"5"} data={cleanedThursdayData} />
        </div>
        <div>
          <Column day={"6"} data={cleanedFridayData} />
        </div>
      </div>
    </>
  );
};

export default Table;
