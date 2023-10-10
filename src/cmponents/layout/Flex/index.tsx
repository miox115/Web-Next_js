/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type {
    Responsive,
    CSSpropertyAlignItems,
    CSSpropertyAlignContent,
    CSSpropertyJustifyContent,
    CSSpropertyJustifyItems,
    CSSpropertyFlexDirection,
    CSSpropertyJustifySelf,
    CSSpropertyFlexWrap,
    CSSpropertyAlignSelf,
} from 'types/styles'
import { toPropValue } from 'utils/styles'

type FlexProps = BoxProps & {
    alignItems?: Responsive<CSSPropertyAlignItemes>
    alignContent?: Responsive<CSSPropertyAlignContent>
    justifyContent?: Responsive<CSSPropertyjustifyContent>
    justifyItems?: Responsive<CSSPropertyjustifyItems>
    flexWrap?: Responsive<CSSPropertyFlexWrap>
    flexBasis?: Responsive<string>
    flexDirection?: Responsive<CSSPropertyFlexDirection>
    flexGrow?: Responsive<string>
    flexShrink?: Responsive<string>
    justifySelf?: Responsive<CSSPropertyJustfySelf>
    alignSelf?: Responsive<CSSpropertyAlignself>
    order?: Responsive<string>
}

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const flex = styled(Box)<flexProps>`
 ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
 ${(props) => toPropValue('align-content', props.alignContent, props.theme)}
 ${(props) => toPropValue('justify-content', props.justifyContent, props.theme)}
 ${(props) => toPropValue('justify-items', props.justifyItems, props.theme)}
 ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme)}
 ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme)}
 ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
 ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme)}
 ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme)}
 ${(props) => toPropValue('justfify-self', props.justifySelf, props.theme)}
 ${(props) => toPropValue('align-self', props.alignSelf, props.theme)}
 ${(props) => toPropValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
    display: 'flex',
}

export default Flex