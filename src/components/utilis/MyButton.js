import React from 'react';
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'
const MyButton = (props) => {
    return (
        <Button
            href="https://tix.axs.com/baHRJwAAAAD%2bWmSxAAAAAAD4%2fv%2f%2f%2fwD%2f%2f%2f%2f%2fCU92ZXJ3YXRjaAD%2f%2f%2f%2f%2f%2f%2f%2f%2f%2fw%3d%3d/shop/search?skin=blizzardowl"
            variant="contained"
            size="small"
            style={{
                background: '#82f005',
                color: 'black'
            }}
        >
            <img 
                src={TicketIcon} 
                className="iconImage"
                alt="icon_button"/>
        {props.text}
        </Button>
       

    );
};

export default MyButton;
