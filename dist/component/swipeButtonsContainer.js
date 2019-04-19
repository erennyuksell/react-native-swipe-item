import { Animated,TouchableOpacity } from 'react-native';
import React, { type, Node } from 'react';


export default class SwipeButtonsContainer extends React.Component {
    constructor(props) {
      super(props)
    
    }
    
    render() {
        const {
            style,
            children,
            ...other
        } = this.props;

        return (
            <Animated.View
                style={style}
                {...other}
                
            >
            
                {children}
            </Animated.View>
        );
    }
}