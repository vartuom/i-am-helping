import clsx from 'clsx';
import './Avatar.scss';

export interface IAvatarProps {
  size: number,
  url: string,
  isUserCard?: boolean,
  extraClass?: string
}

export const Avatar = ({ size, url, isUserCard, extraClass = "" }: IAvatarProps) => {
  const userCard = isUserCard ? 'avatar_userCard' : '';
  const className = clsx(
    'avatar',
    {
      [`${userCard}`]: userCard
    },
    extraClass
  )

  return <>
    <img className={className} src={url} alt='Аватар пользователя' width={size + 'px'} height={size + 'px'}></img>
  </>
}