import './NewApplication.scss'
import ShakingHands from '../UI/ShakingHands/ShakingHands'
import { Button } from '../UI/Buttons/Button'
import { AddIcon } from '../UI/Icons/Icons'
import { FC } from 'react'
import { TRequest } from '../../types'

const NewApplication: FC<Array<TRequest>> = (applications: TRequest[]) => {

  return (
    <>
      {
        applications.length > 0 ?
          <div className='makeApplication'>
            <Button variant="icon" size="large" theme="dark" type="button" icon={<AddIcon />} extraClass='two-sized' />
            <p className='text text_unActive'>Cоздать заявку</p>
            <div className='bottom' />
          </div> :
          <div className="noData">
            <div className='topWrapper'>
              <ShakingHands />
              <p className='text text_unActive'>У Вас пока нет заявок</p>
            </div>
            <div className='bottomWrapper'>
              <p className='text text_active'>Хотите создать заявку?</p>
              <Button variant="icon" size="large" theme="dark" type="button" icon={<AddIcon />} />
              <div className='arrow' />
            </div>
          </div>
      }
    </>
  )
}
export default NewApplication