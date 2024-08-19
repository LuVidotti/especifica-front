import Cell from "./Cell";

const Periods = ({ period, data }) => {
  const info = data?.map((e) => {
    let periodsArray = e.period.split(" - ");
    return { name: e.name, code: e.code, classRoom: periodsArray };
  });
  return (
    <>
      <Cell period={period} info={info} />
    </>
  );
};

export default Periods;
