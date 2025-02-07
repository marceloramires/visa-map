import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Montserrat:React.FC = () => {

  const { montserratColor } = useContext(ColorContext)
  const { MS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'montserrat'} onMouseOver={() => setCountrySelect('montserrat')}>
  <style jsx>{`
  .montserrat {
  fill: ${montserratColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ms" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ms)" />
</defs>
{(MS == 1) ?
<circle fill="url(#ms)" r="2.5" cy="401" cx="637" stroke="black"/>
:
<circle r="2.5" cy="401" cx="637" stroke="black"/>
}
</g>
)
}

export default Montserrat