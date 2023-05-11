import { useState } from "react"
import { EPageTitleFilterKind } from "../../components/page-title-filter/types"
import styles from './AdminPage.module.scss'
import UserCard from "../../components/userCard/userCard"
import SideNavigation from "../../components/side-navigation/SideNavigation"
import { user } from "../../data/user"
import { Chart } from "../../components/chart/Chart"
import ChartList from "../../components/chart-list/ChartList"
import { PageTitleFilter } from "../../components/page-title-filter/PageTitleFilter"

interface IChartProps {
  data: Array<{ date: Date; views: number; visits: number; bids: number }>;
}

export const AdminPageStatistics = () => {
    const [navArray, setNavArray] = useState<EPageTitleFilterKind[]>(
        [EPageTitleFilterKind.Acceptation, EPageTitleFilterKind.Statistics, EPageTitleFilterKind.CreateEdit]);

    const [active, setActive] = useState<EPageTitleFilterKind>(EPageTitleFilterKind.Statistics);

    const onClick = (viewType: EPageTitleFilterKind) => {
        setActive(viewType);
    }

    

    const data: {
      date: Date;
      views: number;
      visits: number;
      bids: number;
      } [] = 
    [
      {
        date: new Date("12.07.2022"),
        views: 234,
        visits: 3122,
        bids: 232,
      },
      {
        date: new Date("12.08.2022"),
        views: 1000,
        visits: 3234,
        bids: 2234,
      },
      {
        date: new Date("12.09.2022"),
        views: 2000,
        visits: 32,
        bids: 2,
      },
      {
        date: new Date("12.10.2022"),
        views: 4120,
        visits: 345,
        bids: 2,
      },
      {
        date: new Date("12.11.2022"),
        views: 8870,
        visits: 3345,
        bids: 2,
      },
      {
        date: new Date("12.12.2022"),
        views: 16000,
        visits: 32,
        bids: 342,
      },
      {
        date: new Date("12.13.2022"),
        views: 32500,
        visits: 39802,
        bids: 22,
      },
      {
        date: new Date("12.14.2022"),
        views: 7000,
        visits: 312,
        bids: 342,
      },
    ]

    const data0: {
      date: Date;
      views: number;
      visits: number;
      bids: number;
      } [] = 
    []

const charts: IChartProps[] = [];

for (let i = 0; i < 9; i++) {
  charts.push({ data: data0.map(item => ({ ...item }))})
}

    return (
        <main className={styles.main}>
            <aside className={`${styles.aside} ${styles.aside_confirmationPage}`}>
                {UserCard(user)}
                {SideNavigation({ items: navArray, onClick: onClick, activeLink: active })}
            </aside>
            <section className={styles.chart}>
              <PageTitleFilter item={active}/>
              <Chart data={data} /> 
              {ChartList(charts)}
            </section>
        </main>
    )
}