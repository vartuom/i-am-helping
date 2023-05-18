import { useLocation, useNavigate } from "react-router-dom"
import './NewApplication.scss'
import ShakingHands from '../UI/ShakingHands/ShakingHands'
import { Button } from '../UI/buttons/Button'
import { AddIcon } from '../UI/icons/icons'
import { FC } from 'react'
import { TRequest } from '../../types'

const NewApplication: FC<Array<TRequest>> = (applications: TRequest[]) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {
        applications.length > 0 ?
          <div className='makeApplication'>
            <Button 
              onClick={() =>
                navigate("firstStep", {
                  state: { background: location },
                })}
              variant="icon" 
              size="large" 
              theme="dark" 
              type="button" 
              icon={<AddIcon />} 
              extraClass='two-sized'
            />
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
              <Button 
                onClick={() =>
                  navigate("firstStep", {
                    state: { background: location },
                  })}
                variant="icon" 
                size="large" 
                theme="dark" 
                type="button" 
                icon={<AddIcon />} />
              <div className='arrow' />
            </div>
          </div>
      }
    </>
  )
}
export default NewApplication
