import { FC, useMemo } from "react";
import styles from "./chart.module.scss";
import { Button } from "../ui/buttons/Button";

interface IPropsChartColumn {
  date: Date;
  views: number;
  visits: number;
  bids: number;
  height: string;
}

const ChartColumn: FC<IPropsChartColumn> = ({
  date,
  views,
  visits,
  bids,
  height,
}) => {
  return (
    <div className={styles.columnWrapper}>
      <div style={{ height }} className={styles.column}></div>
      <span className={styles.dateString}>
        {date.getMonth() + "/" + date.getDate()}
      </span>

      <div className={styles.card}>
        <span className={styles.cardBigText}>
          {date.getDate() + "." + date.getMonth() + "." + date.getFullYear()}
        </span>
        <div className={styles.cardSmallText}>
          <span>Показов</span>
          <span>{views}</span>
        </div>
        <div className={styles.cardSmallText}>
          <span>Посетителей</span>
          <span>{visits}</span>
        </div>
        <div className={styles.cardSmallText}>
          <span>Заявок</span>
          <span>{bids}</span>
        </div>
      </div>
    </div>
  );
};

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
    result = [];
    const step = Math.ceil(biggestViews / 1000) / 4;
    result.push(step * 4 + "K");
    result.push(step * 3 + "K");
    result.push(step * 2 + "K");
    result.push(step + "K");
    result.push("0K");
    return result;
  }, [biggestViews]);

  return (
    <div className={styles.chart}>
      <div className={styles.axisContainer}>
        {axisData.map((step) => {
          return <span>{String(step)}</span>;
        })}
      </div>
      <div className={styles.columnsContainer}>
        {data.map((item) => (
          <ChartColumn
            {...item}
            height={
              (item.views / (Math.ceil(biggestViews / 1000) * 1000)) * 100 + "%"
            }
          />
        ))}
      </div>
      <div className={styles.excelButtonContainer}>
        <Button animated="excel" onClick={() => {}} type="button" />
      </div>
    </div>
  );
};
