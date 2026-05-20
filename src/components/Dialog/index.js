import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let dialogStyles = {
    width: '55.9vh',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    padding: '10px 20px 40px',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff'
};

class Dialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyles} className="glass-panel">
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>X</button>

                <div>{this.props.children}</div>
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return ReactDOM.createPortal(
            <div>
                {dialog}
            </div>,
            document.body
        );
    }
}

export default Dialog;