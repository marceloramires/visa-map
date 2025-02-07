import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Anguilla:React.FC = () => {

  const { anguillaColor } = useContext(ColorContext)
  const { AI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'anguilla'} onMouseOver={() => setCountrySelect('anguilla')}>
  <style jsx>{`
  .anguilla {
  fill: ${anguillaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ai" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ai)" />
</defs>
{(AI == 1) ?
<circle fill="url(#ai)" r="2.5" cy="380" cx="635" stroke="black"/>
:
<circle r="2.5" cy="380" cx="635" stroke="black"/>
}
</g>
)
}
  
export default Anguilla