// tslint:disable: no-magic-numbers
import React from "react"
import Tfw from 'tfw'
import Flexagons from '../../flexagons'

import "./tri-compatibility.css"

const castUnit = Tfw.Converter.Unit

interface ITriCompatibilityProps {
    className?: string
    size?: string
}

export default class TriCompatibility extends React.Component<ITriCompatibilityProps> {
    private readonly refSvg = React.createRef<SVGSVGElement>()
    private readonly x: number[] = []
    private readonly y: number[] = []
    private readonly flexagons = Flexagons.createTri()
    state = {}

    constructor(props: ITriCompatibilityProps) {
        super(props)
        const ANGLE_STEP = 20
        const RADIUS = 700
        for (let i = 0; i < this.flexagons.length; i++) {
            const ang = Tfw.Calc.toRad(i * ANGLE_STEP)
            this.x.push(RADIUS * Math.sin(ang))
            this.y.push(-RADIUS * Math.cos(ang))
        }
    }

    componentDidMount() {
        window.setTimeout(this.highlight)
    }

    getColorIndex(gap: number): number {
        switch (gap) {
            case 3: return 0
            case 15: return 0
            case 8: return 1
            case 10: return 1
            case 9: return 2
            default: return 0
        }
    }

    highlight = (indexToHighlight = -1) => {
        const svg = this.refSvg.current
        if (svg === null) return
        const index =
            indexToHighlight === -1 ?
                Math.floor(Math.random() * this.flexagons.length) :
                indexToHighlight
        const nodes = svg.querySelectorAll("g[data-from]")
        for (let k = 0; k < nodes.length; k++) {
            const node = nodes.item(k) as SVGGElement
            node.style.opacity = "1"
            const from = parseInt(node.getAttribute("data-from") ?? '', 10)
            if (from === index) continue
            const to = parseInt(node.getAttribute("data-to") ?? '', 10)
            if (to === index) continue
            node.style.opacity = "0.1"
        }
    }

    renderLines() {
        const lines: JSX.Element[] = []
        const { flexagons } = this
        const colors = ["#080", "#008", "#800"]

        for (let i = 0; i < flexagons.length; i++) {
            const flex1 = flexagons[i]
            const x1 = this.x[i]
            const y1 = this.y[i]

            for (let k = i + 1; k < flexagons.length; k++) {
                const flex2 = flexagons[k]
                const inter = Flexagons.intersect(flex1, flex2)
                if (inter.length > 0) continue
                const x2 = this.x[k]
                const y2 = this.y[k]
                const colorIndex = this.getColorIndex(k - i)
                const color = colors[colorIndex]
                let path = `M${x1},${y1}L${x2},${y2}`
                if (colorIndex === 0) {
                    path = `M${x1},${y1}Q0,0,${x2},${y2}`
                }
                let dash = "10 20"
                if (i % 2 === 0 && k - i === 3) {
                    dash = "none"
                } else if (i % 2 === 1 && k - i === 15) {
                    dash = "none"
                }
                lines.push(
                    <g
                        key={`L${i}/${k}`}
                        data-from={i}
                        data-to={k}
                        stroke-dasharray={dash}
                        stroke-linecap="round"
                    >
                        <path
                            stroke={color}
                            stroke-width="10"
                            d={path} />
                        <path
                            stroke="#fff7"
                            stroke-width="5"
                            d={path} />
                    </g>
                )
            }
        }
        return lines
    }

    render() {
        const classes = [
            'view-TriCompatibility',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const size = castUnit(this.props.size, "640px")
        const color = "#eee"

        return <figure>
            <svg
                ref={this.refSvg}
                className={classes.join(" ")}
                viewBox="-800 -800 1600 1600"
                width={size}
                height={size}
                stroke-linejoin="round"
                style={{
                    fontWeight: "bolder",
                    fontFamily: "sans-serif"
                }}
            >
                <g fill="none">
                    {
                        this.renderLines()
                    }
                </g>
                {
                    this.flexagons.map(
                        (flex: number[], idx: number) => {
                            const [A, B, C, D, E, F] = flex
                            const x = this.x[idx]
                            const y = this.y[idx]
                            return <g
                                key={`config-${flex[0]}`}
                                data-id={idx}
                                stroke-linejoin="round"
                                style={{
                                    cursor: "pointer"
                                }}
                                onClick={() => {this.highlight(idx)}}
                                transform={`translate(${x},${y})`}
                            >
                                <g fill={color} stroke="#000" stroke-width="3">
                                    <path stroke="#000" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                                    <path fill="#0004" stroke="none" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                                    <path stroke="#333" d="M100,0 L50,87,-50,87,0,0 Z" />
                                    <path fill="#0002" stroke="none" d="M100,0 L50,87,-50,87,0,0 Z" />
                                    <path stroke="#666" d="M-100,0 L-50,-87,50,-87,100,0 Z" />
                                </g>
                                <g stroke="none" fill="#000b" text-anchor="middle" dominant-baseline="middle" font-size="30">
                                    <text x="-50" y="30">{A}</text>
                                    <text x="0" y="55">{B}</text>
                                    <text x="50" y="30">{C}</text>
                                    <text x="50" y="-30">{D}</text>
                                    <text x="0" y="-55">{E}</text>
                                    <text x="-50" y="-30">{F}</text>
                                </g>
                            </g>
                        }
                    )
                }
            </svg>
        </figure>
    }
}
