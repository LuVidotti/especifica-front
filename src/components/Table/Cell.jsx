const Cell = ({ period, info }) => {
  if (info) {
    const firstPeriod = info?.map((e) => {
      let period = e.classRoom.filter((item) => /^.{2}1/.test(item));
      if (period.length > 0) {
        return { classRoom: period, name: e.name, code: e.code };
      }
      return null;
    });

    const secondPeriod = info?.map((e) => {
      let period = e.classRoom.filter((item) => /^.{2}2/.test(item));
      if (period.length > 0) {
        return { classRoom: period, name: e.name, code: e.code };
      }
      return null;
    });

    const thirdPeriod = info?.map((e) => {
      let period = e.classRoom.filter((item) => /^.{2}3/.test(item));
      if (period.length > 0) {
        return { classRoom: period, name: e.name, code: e.code };
      }
      return null;
    });

    const fourthPeriod = info?.map((e) => {
      let period = e.classRoom.filter((item) => /^.{2}4/.test(item));
      if (period.length > 0) {
        return { classRoom: period, name: e.name, code: e.code };
      }
      return null;
    });

    const fifthPeriod = info?.map((e) => {
      let period = e.classRoom.filter((item) => /^.{2}5/.test(item));
      if (period.length > 0) {
        return { classRoom: period, name: e.name, code: e.code };
      }
      return null;
    });

    const filteredFirstPeriod = firstPeriod.filter(
      (element) => element !== null
    );
    const filteredSecondPeriod = secondPeriod.filter(
      (element) => element !== null
    );
    const filteredThirdPeriod = thirdPeriod.filter(
      (element) => element !== null
    );
    const filteredFourthPeriod = fourthPeriod.filter(
      (element) => element !== null
    );
    const filteredFifthPeriod = fifthPeriod.filter(
      (element) => element !== null
    );

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "small",
          }}
        >
          <>
            <div style={{ display: "flex" }}>
              <p>{period}1-</p>
              <p>{filteredFirstPeriod.map((e) => e.name)}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{period}2-</p>
              <p>{filteredSecondPeriod.map((e) => e.name)}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{period}3-</p>
              <p>{filteredThirdPeriod.map((e) => e.name)}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{period}4-</p>
              <p>{filteredFourthPeriod.map((e) => e.name)}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{period}5-</p>
              <p>{filteredFifthPeriod.map((e) => e.name)}</p>
            </div>
          </>
        </div>
      </>
    );
  }

  return <></>;
};

export default Cell;
