import './Popup.css';


function Popup(props) {
    const {
        isOpened = true,
        onClose,
        children,
    } = props;

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div
            className={isOpened ? 'popup popup_opened' : 'popup'}
            onClick={handleOverlay}
        >
            <div className={`popup__container`}>
                {children}
            </div>
        </div>
    )
}

export default Popup;
