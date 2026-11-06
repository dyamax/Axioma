import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './game/Game'

const assetRoot = new URL('.', window.location.href).pathname
document.documentElement.style.setProperty('--asset-app-background', `url("${assetRoot}images/app.theme.png")`)
document.documentElement.style.setProperty('--asset-plus-icon', `url("${assetRoot}icons/not-standalone-case/plus.romb.svg")`)
document.documentElement.style.setProperty('--asset-minus-icon', `url("${assetRoot}icons/not-standalone-case/minus.romb.svg")`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
