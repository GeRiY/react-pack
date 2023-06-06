import React from 'react';
import classes from './MAIN.module.scss';
import {ComponentProps,ComponentState} from './MAIN.model';
import { Divider, Button, LinearProgress, Box } from '@mui/material/';
import QuillMailEditor from "../QuillMailEditor";

class MainComponent extends React.Component<ComponentProps, ComponentState> {
    state: {};
    constructor(props: ComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={classes.arg}>
                <QuillMailEditor />
            </div>
        );
    }
}
export default MainComponent;