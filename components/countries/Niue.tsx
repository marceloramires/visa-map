import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Niue:React.FC = () => {

  const { niueColor } = useContext(ColorContext)
  const { NU } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'niue'} onMouseOver={() => setCountrySelect('niue')}>
  <style jsx>{`
  .niue {
  fill: ${niueColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#nu)" />
</defs>
{(NU == 1) ?
<circle fill="url(#nu)" r="5" cy="615" cx="32" stroke="black"/>
:
<circle r="5" cy="615" cx="32" stroke="black"/>
}
</g>
)
}

export default Niue