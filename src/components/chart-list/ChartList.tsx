import React, { FC } from 'react';
import styles from './ChartList.module.scss'
import { Chart } from '../chart/chart1';

interface IChartProps {
  data: Array<{ date: Date; views: number; visits: number; bids: number }>;
}

const ChartList: FC<Array<IChartProps>> = (items) => {

  return (
    <div className={styles.list}>
      {items && Object.values(items).map((item, index) =>
        (<div key={index}><Chart {...item} /></div>))}
      {/* Чтобы включить блюр внизу странцы, раскомментируй строку ниже */}
      {/* <div className={styles.blur} /> */}
    </div>
  )
}

export default ChartList