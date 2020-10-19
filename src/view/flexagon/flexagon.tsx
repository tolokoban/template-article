// tslint:disable: no-magic-numbers
import Tfw from 'tfw'
import React from "react"

const castStringArray = Tfw.Converter.StringArray
const castFloat = Tfw.Converter.Double
const castUnit = Tfw.Converter.Unit

interface IFlexagonProps {
    className?: string
    color?: string | string[]
    size?: string
    rotate?: number
    values: [number, number, number, number, number, number]
}

export default class Flexagon extends React.Component<IFlexagonProps> {
    render() {
        const size = castUnit(this.props.size, "64px")
        const colors = castStringArray(this.props.color, ["#ffd"])
        const [A, B, C, D, E, F] = this.props.values
        const c0 = colors[0] as string
        const c1 = colors[1 % colors.length] as string
        const c2 = colors[2 % colors.length] as string
        const c3 = colors[3 % colors.length] as string
        const c4 = colors[4 % colors.length] as string
        const c5 = colors[5 % colors.length] as string
        return <svg
            viewBox="-110 -110 220 220"
            width={size}
            height={size}
            stroke-linejoin="round"
            style={{
                fontWeight: "bolder",
                fontFamily: "inherit"
            }}
        >
            <g transform={`rotate(${castFloat(this.props.rotate, 0) * 60})`}>
                <g stroke="none">
                    <path fill={c0} d="M0,0L-100,0,-50,87Z" />
                    <path fill={c1} d="M0,0L-50,87,50,87Z" />
                    <path fill={c2} d="M0,0L50,87,100,0Z" />
                    <path fill={c3} d="M0,0L100,0,50,-87Z" />
                    <path fill={c4} d="M0,0L50,-87,-50,-87Z" />
                    <path fill={c5} d="M0,0L-50,-87,-100,0Z" />
                </g>
                <g fill="none" stroke="none" stroke-width="4">
                    <path stroke="#000" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                    <path fill="#0003" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                    <path stroke="#333" d="M100,0 L50,87,-50,87,0,0 Z" />
                    <path fill="#0002" d="M100,0 L50,87,-50,87,0,0 Z" />
                    <path stroke="#666" d="M-100,0 L-50,-87,50,-87,100,0 Z" />
                </g>
                <path stroke="#0007" stroke-width="1" fill="none"
                    d="M-50,-87L50,87 M0,0L50,-87" />
                <g stroke="none" fill="#000b" text-anchor="middle" dominant-baseline="middle" font-size="30">
                    <g transform="translate(-50,30) rotate(60)">
                        <text>{A}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(0,55) rotate(120)">
                        <text>{B}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(50,30) rotate(-60)">
                        <text>{C}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(50,-30)">
                        <text>{D}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(0,-55) rotate(180)">
                        <text>{E}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(-50,-30)">
                        <text>{F}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                </g>
            </g>
        </svg>
    }
}
