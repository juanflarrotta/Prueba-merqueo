import styles from './styles.module.scss'

export default function Btn({ text, type, modifier, onclick }) {
    let nameClass = ''
    let classModifier = ''
    let classes = ''
    if (type == 'text') {
        nameClass = 'btn__message';
        if (modifier != undefined) {
            classModifier = 'btn__message--' + modifier;
            classes = styles[nameClass] + ' ' + styles[classModifier];
        }
        else {
            classes = styles[nameClass];
        }
    }
    else if (type == 'icon') {
        nameClass = 'btn__icon';
        if (modifier != undefined) {
            classModifier = 'btn__icon--' + modifier;
            classes = styles[nameClass] + ' ' + styles[classModifier];
        }
        else {
            classes = styles[nameClass];
        }
    }
    return (
        <button className={styles.btn} type="button" onClick={onclick}>
            <span className={classes}>{text}</span>
        </button>
    )
}