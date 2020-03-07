import React from "react";
import loadMetadata from './k8sData.js';

interface AppInfoProps {
}
interface AppInfoState {
  podName: String;
  nodeName: String;
}

export class AppInfo extends React.Component<AppInfoProps, AppInfoState> {

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
                podName: data.POD,
                nodeName: data.NODE
            });
        }).catch(e =>  this.setState({ podName: 'UNKNOWN', nodeName: 'UNKNOWN' }));
      }

    render() {
        return (<div className="meta-info">This page has been served by <strong>MagicalRocks</strong> | Pod: <strong>{this.state.podName}</strong> | Node: <strong>{this.state.nodeName}</strong> | <a href="https://privacy.magical.rocks">Impressum</a> </div>);
    }
}

/**/