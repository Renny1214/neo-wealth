import styles from './Select.module.css'

export interface SelectOption<T extends string> {
  value: T
  label: string
}

interface SelectProps<T extends string> {
  id: string
  label: string
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
}

export function Select<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: SelectProps<T>) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <select
        id={id}
        className={styles.select}
        value={value}
        onChange={(event) => {
          const nextValue = event.target.value
          if (options.some((option) => option.value === nextValue)) {
            onChange(nextValue as T)
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
