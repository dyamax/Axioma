import UI from './index.module.css';
import { FOLDERS } from '../../constants';

export function Tap({x, y}: Record<string, string>) {
  return (
    <span className={UI.tap}>
      Tap
      <img style={{'top': y, 'left': x}} src={`${FOLDERS.icons}/not-standalone-case/tap.svg`} alt="tap icon" />
    </span>
  )
}