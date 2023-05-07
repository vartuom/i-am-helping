import { FC } from "react";
import styles from "./chart-column.module.scss";

interface IPropsChartColumn {
  date: Date;
  views: number;
  visits: number;
  bids: number;
  height: string;
}

export const ChartColumn: FC<IPropsChartColumn> = ({
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
