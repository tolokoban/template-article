// tslint:disable: no-magic-numbers
import Tfw from 'tfw'
import React from "react"
import Flexagon from '../../view/flexagon'
import Flexagons from '../../flexagons'
import TriCompatibility from '../../view/tri-compatibility'
import OneInCommon from '../../view/one-in-common'

import "./intro.css"

interface IIntroProps {
    className?: string | string[]
}

export default class Intro extends React.Component<IIntroProps> {
    render() {
        const classes = [
            'page-Intro',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<section className={classes.join(' ')}>
            <h1>Tri-Hexa-Flexagons with construction defect</h1>
            <div className="fig">
                <p>
                    <b><a href="https://en.wikipedia.org/wiki/Flexagon#Trihexaflexagon" target="wiki">Tri-Hexa-Flexagons</a></b> are&nbsp;
                    <a href="https://en.wikipedia.org/wiki/M%C3%B6bius_strip" target="wiki">Möbius strips</a> made of 18 triangles.
                    They have 3 distinct faces.
                    But if you don't construct them right, you end up with this:
                </p>
                <figure className="flexagons">
                    {
                        Flexagons.createTri().map(
                            values => <Flexagon values={values} size="3.5em" />
                        )
                    }
                </figure>
            </div>
            <div className="fig">
                <div>
                    <p>
                        A <em>good</em> flexagon will be axial-symetrical with a&nbsp;
                        <code>2-2-2</code> pattern.
                        Whereas a <em>wrong</em> flexagon has a <code>1-2-3</code> pattern.
                        The result is that it is now impossible to choose three configurations
                        that share no triangle.
                    </p>
                    <p>
                        Let's call <b>compatible</b> two configurations with no common
                        triangle. It turns out that each configuration is compatible with
                        5 and only 5 other configurations.
                    </p>
                    <p>
                        Lines represent compatibility. If the line is not dashed,
                        the configurations are both sides of the same hexagon.
                    </p>
                </div>
                <TriCompatibility size="21em" />
            </div>
            <div className="fig">
                <div>
                    <p>
                        It seems that the best we can do is to find configuration
                        with the smallest possible number of common triangles.
                    </p>
                    <p>We have two winners:</p>
                    <div>
                        <Flexagon values={[0, 7, 6, 13, 12, 11]} color="#fdc" size="6em" />
                        <Flexagon
                            values={[16, 5, 4, 11, 10, 9]}
                            color={["#dfc", "#dfc", "#dfc", "#fdc", "#dfc", "#dfc"]}
                            size="6em" />
                        <Flexagon values={[8, 15, 14, 3, 2, 1]} color="#cdf" size="6em" />
                    </div>
                    <div>
                        <Flexagon values={[0, 7, 6, 13, 12, 11]} color="#fdc" size="6em" />
                        <Flexagon
                            values={[2, 9, 8, 15, 14, 13]}
                            color={["#dfc", "#dfc", "#dfc", "#dfc", "#dfc", "#fdc"]}
                            size="6em" />
                        <Flexagon values={[10, 17, 15, 5, 4, 3]} color="#cdf" size="6em" />
                    </div>
                </div>
                <OneInCommon />
            </div>
        </section>)
    }
}
