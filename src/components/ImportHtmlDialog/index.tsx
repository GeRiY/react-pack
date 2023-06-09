import React, { Component } from "react";
import classes from "./ImportHtmlDialog.module.scss";
import { FlexPropsType } from "../../common.model";
import {Dialog, Button} from "@mui/material";

interface ImportHtmlDialogProps {
    show: boolean;
    onClose: () => void;
    onImport: (html: string) => void;
}

class ImportHtmlDialog extends Component<ImportHtmlDialogProps, object> {

    constructor(props: ImportHtmlDialogProps) {
        super(props);
    }

    onImport = () => {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            this.props.onImport(textarea.value);
        }
    }
    render() {
        return (
            <Dialog open={this.props.show}>
                <div className={classes.dialog}>
                    <div className={classes.title}>
                        <h3>HTML importálása</h3>
                    </div>
                    <div className={classes.content}>
                        <textarea name="" id="" placeholder={'<html>'}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={this.props.onClose}
                        >
                            Mégse
                        </Button>

                        <Button
                            variant="contained"
                            color="success"
                            onClick={this.onImport}
                        >
                            Importálás
                        </Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default ImportHtmlDialog;
