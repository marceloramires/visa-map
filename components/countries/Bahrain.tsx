import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Bahrain:React.FC = () => {

  const { bahrainColor } = useContext(ColorContext)
  const { BH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bahrain'} onMouseOver={() => setCountrySelect('bahrain')}>
  <style jsx>{`
  .bahrain {
  fill: ${bahrainColor};
  }
  `}</style>
<defs>
  <pattern id="bh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bh)" />
</defs>
{(BH == 1) ?
<>
<path fill="url(#bh)" d="M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z" />
<circle fill="url(#bh)" r="4" cy="333" cx="1264" stroke="black"/>
</>
:
<>
<path d="M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z" />
<circle r="4" cy="333" cx="1264" stroke="black"/>
</>
}

</g>
)
}

export default Bahrain