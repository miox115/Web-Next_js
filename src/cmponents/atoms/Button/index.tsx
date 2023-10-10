/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types'
import {
    toPropValue,
    Color,
    Fontsize,
    LetterSpacing,
    LineHeight,
    Space,
} from 'utils/styles'

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    fontSize?: Responsive<FontSize>
    fontWeight?: Responsibe<string>
    letterSpacing?: Responsive<LetterSpacing>
    lineHeight?: Responsive<LineHeight>
    textAlign?: Responsive<string>
    color?: Responsive<Color>
    bacckgroundColor?: Responsive<string>
    width?: Responsive<string>
    height?: Responsive<string>
    minWidth?: Responsive<string>
    minHeight?: Responsive<string>
    display?: Responsive<string>
    border?: Responsive<string>
    overflow?: Responsive<string>
    margin?: Responsive<Space>
    marginTop?: Responsive<Space>
    marginRight?: Responsive<Space>
    marginBottom?: Responsive<Space>
    marginLeft?: Responsive<Space>
    padding?: Responsive<Space>
    paddingTop?: Responsive<Space>
    paddingRight?: Responsive<Space>
    paddingBottom?: Responsive<Space>
    paddingLeft?: Responsive<Space>
    paddingClass?: Responsive<Space>
    paseudoClass?: {
        hover?: {
            backgroundColor?: Responsive<Color>
        }
        disabled?: {
            backgroundColor?: Responsive<Color>
        }
    }
}

const variants = {
    //　プライマリ
    primary: {
        color: 'white',
        backgroundColor: 'primary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'primaryDark',
            },
            disabled: {
                backgroundColor: 'primary',
            },
        },
    },
    // セカンダリ
    secondary: {
        color: 'white',
        backgroundColor: 'secondary',
        border: 'none',
        pseudoClass: {
            hover: {
                dackgroundColor: 'secondaryDark',
            },
        disabled: {
            backgroundColor: 'secondary',
            },
        },
    },
    // デンジャー
    danger: {
        color: 'white',
        bacgroundColor: 'danger',
        pseudoClass: [
            hover: {
                backgroundColor: 'dangerDark',
            },
            disabled: {
                backgroundoColor: 'danger',
            },
        ],
    },
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、ボーダー、レイアウト、スペース
 * 関連のPropsを追加
 */

const Button = styled.button<ButtonProps>`
 ${({ variant, color, backgroundColor, pseudoClass, theme}) => {
    // バリアントスタイルの適用
    if (variant && variants[variant]) {
        const styles = []
        !color &&
        styles.push(toPropValue('colr', variants[variant].color, theme))
        !backgroundColor &&
         styles.push(
            toOropValue(
                'background-color',
                variants[variant].backgroundColor,
                theme,
            ),
         )
         !pseudoClass &&
         styles.push(
            `&:hover {
                ${toPropValue(
                    'background-color',
                    variants[variant].pseudoClass.hover.backgroundColor,
                theme,
                    )}
            }`.replaceAll('/n',''),
         )
         !pseudoClass &&
         styles.push(
            `&:disabled {
                ${toPropValue(
                    'background-color',
                    variants[variant].pseudoClass.disabled.backgroundColor,
                theme,
                    )}
            }`.replaceAll('/n',''),
         )
            return styles.join('\n')
    }
 }}
 
${(props) => toPropValue('font-size',props.color, props.theme)}
${(props) => toPropValue('letter-spacing',props.color, props.theme)}
${(props) => toPropValue('line-height',props.color, props.theme)}
${(props) => toPropValue('color',props.color, props.theme)}
${(props) => toPropValue('background-color',props.backgroundColor, props.theme)}
${(props) => toPropValue('width',props.width, props.theme)}
${(props) => toPropValue('height',props.height, props.theme)}
${(props) => toPropValue('min-width',props.minWidth, props.theme)}
${(props) => toPropValue('min-height',props.minHeight, props.theme)}
${(props) => toPropValue('display',props.display, props.theme)}
${(props) => toPropValue('border',props.border, props.theme)}
${(props) => toPropValue('overflow',props.overflow, props.theme)}
${(props) => toPropValue('margin',props.margin, props.theme)}
${(props) => toPropValue('margin-top',props.marginTop, props.theme)}
${(props) => toPropValue('margin-left',props.marginLeft, props.theme)}
${(props) => toPropValue('margin-bottom',props.marginBottom, props.theme)}
${(props) => toPropValue('margin-right',props.marginRight, props.theme)}
${(props) => toPropValue('padding',props.padding, props.theme)}
${(props) => toPropValue('padding-top',props.paddingTop, props.theme)}
${(props) => toPropValue('padding-left',props.paddingLeft, props.theme)}
${(props) => toPropValue('padding-bottom',props.paddingBottom, props.theme)}
${(props) => toPropValue('padding-right',props.paddingRight, props.theme)}
&:hover {
    ${(props) => 
    toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
    )}
}
&:disabled {
    ${(props) => 
    toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
    )}
}
cursor: pointer;
outline: 0;
text-decoration: 'none';
opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
border-radius: 4px;
border: none; 
`

Button.defaultProps = {
    variant: 'primary',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    color: 'white',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: 'inherit',
}
export default Button