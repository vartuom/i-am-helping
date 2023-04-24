import s from './avatar.component.module.scss';

interface IAvatarProps {
  size: number,
  url: string
}

export const Avatar = ({size, url}: IAvatarProps) => {

  return <>
    <img className={s.avatar} src={url} alt='Аватар пользователя' width={size+'px'} height={size+'px'}></img>
  </>
}