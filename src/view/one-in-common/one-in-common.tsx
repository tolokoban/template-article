// tslint:disable: no-magic-numbers
import React from "react"
import Tfw from 'tfw'
import Flexagons from '../../flexagons'
import Flexagon from '../flexagon'

import "./one-in-common.css"

interface IOneInCommonProps {
    className?: string | string[]
}

export default class OneInCommon extends React.Component<IOneInCommonProps> {
    private readonly flexagons = Flexagons.createTri()
    private readonly flex0 = this.flexagons[0]
    private readonly flex3 = this.flexagons[3]
    private readonly flex8 = this.flexagons[8]
    private readonly flex9 = this.flexagons[9]
    private readonly flex10 = this.flexagons[10]
    private readonly flex15 = this.flexagons[15]

    private readonly flex2 = this.flexagons[2]
    private readonly flex4 = this.flexagons[4]
    private readonly flex14 = this.flexagons[14]
    private readonly flex16 = this.flexagons[16]


    state = {}

    render() {
        const classes = [
            'view-OneInCommon',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const size = "4em"

        return (<div className={classes.join(' ')}>
            <div className="grid">
                <div>&nbsp;</div>
                <Flexagon values={this.flex2} 
                    color={["#dfc", "#dfc", "#dfc", "#dfc", "#dfc", "#fdc"]}
                    size={size} rotate={2}/>
                <Flexagon values={this.flex4} 
                    color={["#dfc", "#fdc", "#dfc", "#dfc", "#dfc", "#dfc"]}
                    size={size} rotate={2}/>
                <Flexagon values={this.flex14} 
                    color={["#dfc", "#dfc", "#dfc", "#dfc", "#dfc", "#fdc"]}
                    size={size} rotate={-2}/>
                <Flexagon values={this.flex16} 
                    color={["#dfc", "#dfc", "#dfc", "#fdc", "#dfc", "#dfc"]}
                    size={size} rotate={-2}/>

                <Flexagon values={this.flex0} color="#fdc" size={size} />
                <div>13</div><div>11</div><div>7</div><div>11</div>

                <Flexagon values={this.flex3} color="#cdf" size={size} />
                <div>{Flexagons.intersect(this.flex3, this.flex2).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex3, this.flex4).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex3, this.flex14).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex3, this.flex16).join(", ")}</div>

                <Flexagon values={this.flex8} color="#cdf" size={size} />
                <div>{Flexagons.intersect(this.flex8, this.flex2).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex8, this.flex4).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex8, this.flex14).join(", ")}</div>
                <div><span role="img" aria-label="ok">👍</span></div>

                <Flexagon values={this.flex9} color="#cdf" size={size} />
                <div>{Flexagons.intersect(this.flex9, this.flex2).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex9, this.flex4).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex9, this.flex14).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex9, this.flex16).join(", ")}</div>

                <Flexagon values={this.flex10} color="#cdf" size={size} />
                <div><span role="img" aria-label="ok">👍</span></div>
                <div>{Flexagons.intersect(this.flex10, this.flex4).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex10, this.flex14).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex10, this.flex16).join(", ")}</div>

                <Flexagon values={this.flex15} color="#cdf" size={size} />
                <div>{Flexagons.intersect(this.flex15, this.flex2).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex15, this.flex4).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex15, this.flex14).join(", ")}</div>
                <div>{Flexagons.intersect(this.flex15, this.flex16).join(", ")}</div>
            </div>
        </div>)
    }
}
