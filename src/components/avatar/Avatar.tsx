import clsx from 'clsx';
import './Avatar.scss';

export interface IAvatarProps {
  size: number,
  url: string,
  isUserCard?: boolean,
}

export const Avatar = ({size, url, isUserCard}: IAvatarProps) => {
  const extraClass = isUserCard ? 'avatar_userCard' : '';
  const className = clsx(
    'avatar',
    {
      [`${extraClass}`]: extraClass
    }
  )

  return <>
    <img className={className} src={url} alt='Аватар пользователя' width={size+'px'} height={size+'px'}></img>
  </>
}