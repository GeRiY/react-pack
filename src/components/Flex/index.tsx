import React, { Component } from "react";
import { FlexPropsType } from "../../common.model";

class Flex extends Component<FlexPropsType, object> {
    render() {
        const { children, ...rest } = this.props;
        const flexStyles: any = {
            display: 'flex',
            flexDirection: rest['flex-direction'] || 'row',
            justifyContent: rest['justify-content'] || 'flex-start',
            alignItems: rest['align-items'] || 'flex-start',
            flexBasis: rest['flex-basic'] || 'auto',
            flexWrap: rest['flex-wrap'] || 'nowrap',
            width: rest.width || 'auto',
            gap: rest.gap || 0,
            padding: rest.padding || 0,
            background: rest['bg-color'] || 'transparent'
            // set height if is in rest
        };
        if (rest.height) {
            flexStyles['height'] = rest.height;
        }
        return (
            <div style={flexStyles}>
                {children}
            </div>
        );
    }
}

export default Flex;
