import { FC, useMemo } from "react";
import styles from "./Chart.module.scss";
import { Button } from "../ui/buttons/Button";
import { ChartColumn } from "./ChartColumn";

interface IChartProps {
  data: Array<{ date: Date; views: number; visits: number; bids: number }>;
}

export const Chart: FC<IChartProps> = ({ data }) => {
  const biggestViews = data.reduce(
    (biggest, { views }) => (views > biggest ? views : biggest),
    0
  );

  const axisData = useMemo(() => {
    let result: Array<number | string> = [1000, 750, 500, 250, 0];
    if (biggestViews < 1000) {
      return result;
    }
    result = [];
    const step = Math.ceil(biggestViews / 1000) / 4;
    result.push(step * 4 + "K");
    result.push(step * 3 + "K");
    result.push(step * 2 + "K");
    result.push(step + "K");
    result.push("0");
    return result;
  }, [biggestViews]);

  return (
    <div className={styles.chart}>
      <div className={styles.chart__axisContainer}>
        {axisData.map((step, index) => {
          return <span key={index}>{String(step)}</span>;
        })}
      </div>
      <div className={styles.chart__columnsContainer}>
        {data.map((item) => (
          <ChartColumn
            {...item}
            key={item.date.getDate()}
            height={
              (item.views / (Math.ceil(biggestViews / 1000) * 1000)) * 100 + "%"
            }
          />
        ))}
      </div>
      <div className={styles.chart__excelButtonContainer}>
        <Button animated="excel" onClick={() => {}} type="button" />
      </div>
    </div>
  );
};
