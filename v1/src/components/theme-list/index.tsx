import UI from './index.module.css'
import MCSS from '../../game/Game.module.css'
import type { Dispatch, SetStateAction } from 'react'

type TList = {
    options: string[]
    setTheme: Dispatch<SetStateAction<string>>
}

const ThemeList = ({options, setTheme}: TList) => {
    return (
        <div className={MCSS.list} onError={() => console.log(options, setTheme)}>
            {options.map(option => (
                <div key={option} className={UI.option} onClick={() => setTheme(option)}>
                    <p>{option}</p>
                    <div className={`${UI.option_indicator} ${UI[option]}`}><div></div><div></div></div>
                </div>
            ))}
        </div>
    )
}

export default ThemeList
