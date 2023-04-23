import './NewApplication.scss'
import { applications } from "../../data/applications"
import ShakingHands from '../ui/ShakingHands/ShakingHands'
import AddButton from '../ui/AddButton/AddButton'

export default function NewApplication() {

  return (
    <>
      {
        applications.length > 0 ?
        <div className='makeApplication'>
          <AddButton />
          <p className='text text_unActive'>Cоздать заявку?</p>
          <div className='bottom' />
        </div> :
        <div className="noData">
          <div className='topWrapper'>
            <ShakingHands />
            <p className='text text_unActive'>У Вас пока нет заявок</p>
          </div>
          <div className='bottomWrapper'>
            <p className='text text_active'>Хотите создать заявку?</p>
            <AddButton />
            <div className='arrow' />
          </div>
        </div>
      }
    </>
  )
}