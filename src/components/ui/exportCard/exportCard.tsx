import { FC, ReactNode } from "react";
import styles from "./exportCard.module.scss";

interface IExportCardProps {
  button: ReactNode;
}

export const ExportCard: FC<IExportCardProps> = ({button}) => {
  return (
    <div className={styles.exportCard}>
      <div className={styles.excelButtonContainer}>{button}</div>
    </div>
  );
};