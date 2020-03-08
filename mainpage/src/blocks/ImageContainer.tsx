import React from "react";

interface ImageContainerProps {
    src: string;
    alt: string;
}
interface ImageContainerState {
}

export class ImageContainer extends React.Component<ImageContainerProps, ImageContainerState> {

    constructor(props: ImageContainerProps) {
        super(props);
    }
    render() {
        return (<div className="image-block">
            <img src={this.props.src} alt={this.props.alt}/>
        </div>);
    }
}

/**/