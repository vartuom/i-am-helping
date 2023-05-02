export const ColorfulLabel = ({ fill = "#ACCA3E"}) => {
  return (
    <svg width="215" height="25" viewBox="0 0 216 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L215.091 7L197.273 25H0V0Z" fill={fill}/>
    </svg>
  )
}

<ColorfulLabel fill ="#ACCA3E" /> // волонтер
{/* <ColorfulLabel fill ="#F9BC90" /> // orange
<ColorfulLabel fill ="#818C99" /> // grey */}

export const ColorfulLabelMob = ({ fill = "#ACCA3E"}) => {
  return (
    <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 0L22.4643 27L16.3929 21.1967L10.3214 27L0 0L34 0Z" fill={fill}/>
    </svg>
  )
}

<ColorfulLabelMob fill ="#ACCA3E" /> // волонтер
{/* <ColorfulLabelMob fill ="#F9BC90" /> // orange
<ColorfulLabelMob fill ="#818C99" /> // grey */}
