import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Ireland:React.FC = () => {

  const { irelandColor } = useContext(ColorContext)
  const { IE } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'ireland'} onMouseOver={() => setCountrySelect('ireland')}>
  <style jsx>{`
  .ireland {
  fill: ${irelandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ie" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ie)" />
</defs>
{(IE == 1) ?
<path fill="url(#ie)" d="M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z" stroke="black"/>
:
<path d="M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z" stroke="black"/>
}
</g>
)
}

export default Ireland