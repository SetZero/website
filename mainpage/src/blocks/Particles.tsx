import React, { RefObject } from "react";

interface ParticleDisplayProps {
}
interface ParticleDisplayState {
}

export class ParticleDisplay extends React.Component<ParticleDisplayProps, ParticleDisplayState> {
    private canvasRef: RefObject<HTMLCanvasElement>;

    constructor(props: ParticleDisplayProps) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        if (this.canvasRef.current) {
        }
    }

    render() {
        return (<canvas id="hero-canvas" ref={this.canvasRef}></canvas>);
    }
}