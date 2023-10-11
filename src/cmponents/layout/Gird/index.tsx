/* eslint-disable prettier/prettier*/
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Responsive } from 'types/styles'
import { toPropValue } from 'utils/styles'

type GridProps = BoxProps & {
    gridGap?: Responsive<string>
    gridColumnGap?: Responsive<string>
    griRowGap?: Responsive<string>
    gridColumns?: Responsive<CSSPropertyGridColumn>
    gridRow?: Responsive<CSSPropertyGridRow>
    gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
    gridAutoRows?: Responsive<string>
    gridTemplateColumns?: Responsive<string>
    gridTemplateRows?: Responsive<string>
    gridAreas?: Responsive<CSSPropertyGridArea>
}

/**
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = styled(Box)<GridProps>`
    ${(props) => toPropValue('grid-gap', props.gridGap, props.theme)}
    ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, props.theme)}
    ${(props) => toPropValue('grid-row-gap', props.RowGap, props.theme)}
    ${(props) => toPropValue('grid-row', props.gridRow, props.theme)}
    ${(props) => toPropValue('grid-column', props.gridColumn, props.theme)}
    ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
    ${(props) => toPropValue('grid-auto-columns', props.gridAutoColumns, props.theme)}
    ${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, props.theme)}
    ${(props) => toPropValue('grid-template-columns', props.gridTemplateColumns, props.theme)}
    ${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, props.theme)}
    ${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, props.theme)}
    ${(props) => toPropValue('grid-areas', props.gridAreas, props.theme)}
    `

Grid.Classes.defaultProps = {
    display: 'grid',
}

export default Grid