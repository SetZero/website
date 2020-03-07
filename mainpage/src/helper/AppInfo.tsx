import React from "react";
import loadMetadata from './k8sData.js';

interface AppInfoProps {
}
interface AppInfoState {
  podName: String;
  nodeName: String;
}

export class AppInfo extends React.Component<AppInfoProps, AppInfoState> {
    private readonly maxChannelLength = 30;

    constructor(props: AppInfoProps) {
        super(props);

        this.state = {podName: '', nodeName: ''};
    }

    componentDidMount() {
        // fetch the project name, once it retrieves resolve the promsie and update the state. 
        loadMetadata().then(result => { return result.json(); })
        .then((data) => {
            console.log(data)
            this.setState({
                podName: data.POD
            });
        }).catch(e =>  this.setState({ podName: 'UNKNOWN' }));
      }

    render() {
        return (<div>Pod: {this.state.podName}</div>);
    }
}

/**/