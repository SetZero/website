import React from "react";
import 'lazysizes';

interface ImageContainerProps {
    src: string;
    alt: string;
}
interface ImageContainerState {
}

export class ImageContainer extends React.Component<ImageContainerProps, ImageContainerState> {
    render() {
        return (<div className="image-block">
            <img data-sizes="auto"
                data-src={this.props.src + '.webp'}
                alt={this.props.alt}
                data-srcset={this.props.src + '_small.webp 300w, ' +
                             this.props.src + '_medium.webp 600w, ' +
                             this.props.src + '.webp 900w'}
                className="lazyload"/>
        </div>);
    }
}

/**/