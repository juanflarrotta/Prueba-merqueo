import styles from './styles.module.scss'
export default function Input({ placeholder, onBlur, onFocus }) {
    return (
        <input
            type="text"
            onBlur={() => {
                if (onBlur) {
                    onBlur()
                }
            }}
            onFocus={() => {
                if (onFocus) {
                    onFocus()
                }
            }}

            className={styles.input}
            placeholder={placeholder}
        />
    )
}