import "./NewApplication.scss";
import { applications } from "../../data/applications";
import ShakingHands from "../ui/ShakingHands/ShakingHands";
import { Button } from "../ui/buttons/Button";

export default function NewApplication() {
  return (
    <>
      {applications.length > 0 ? (
        <div className="makeApplication">
          <Button variant="icon" size="large" theme="dark" type="button" />
          <p className="text text_unActive">Cоздать заявку?</p>
          <div className="bottom" />
        </div>
      ) : (
        <div className="noData">
          <div className="topWrapper">
            <ShakingHands />
            <p className="text text_unActive">У Вас пока нет заявок</p>
          </div>
          <div className="bottomWrapper">
            <p className="text text_active">Хотите создать заявку?</p>
            <Button variant="icon" size="large" theme="dark" type="button" />
            <div className="arrow" />
          </div>
        </div>
      )}
    </>
  );
}
