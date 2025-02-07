import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Guadeloupe:React.FC = () => {

  const { guadeloupeColor } = useContext(ColorContext)
  const { GP } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guadeloupe'} onMouseOver={() => setCountrySelect('guadeloupe')}>
  <style jsx>{`
  .guadeloupe {
  fill: ${guadeloupeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gp" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gp)" />
</defs>
{(GP == 1) ?
<circle fill="url(#gp)" r="2.5" cy="403" cx="642" stroke="black"/>
:
<circle r="2.5" cy="403" cx="642" stroke="black"/>
}
</g>
)
}

export default Guadeloupe