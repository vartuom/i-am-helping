import { useState } from "react"
import { EPageTitleFilterKind } from "../../components/PageTitleFilter/types"
import styles from './AdminPage.module.scss'
import UserCard from "../../components/UserCard/UserCard"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import { user } from "../../data/user"
import { Chart } from "../../components/Chart/Chart"
import { PageTitleFilter } from "../../components/PageTitleFilter/PageTitleFilter"
import { Button } from "../../components/UI/buttons/Button"

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

const ChartBlock = () => {
  return (
    <div className={styles.chart_block}>
      <Button type="button" animated="excel" extraClass={styles.button_position}/>
    </div>
  );
};

const ChartList = () => {
  const list = Array.from({ length: 6 }, (_, index) => index + 1);
  
  return (
    <div className={styles.chart_list}>
      {list.map((item) => (
        <ChartBlock key={item} />
      ))}
    </div>
  );
};

    return (
        <main className={styles.main}>
            <aside className={`${styles.aside} ${styles.aside_confirmationPage}`}>
              <UserCard {...user} />
              <SideNavigation items={navArray} onClick={onClick} activeLink={active} />
            </aside>
            <section className={styles.chart}>
              <PageTitleFilter item={active}/>
              <Chart data={data} />
              <ChartList />
            </section>
        </main>
    )
}