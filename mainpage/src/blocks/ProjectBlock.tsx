import React from "react";

interface ProjectBlockProps {
    title: string
    href: string
}
interface ProjectBlockState {
}

export class ProjectBlock extends React.Component<ProjectBlockProps, ProjectBlockState> {
    render() {
        return (<div className="project-block">
            <h2><a href={this.props.href} rel="noopener nofollow">{this.props.title}</a></h2>
            <div className="text-block">{this.props.children}</div>
        </div>);
    }
}