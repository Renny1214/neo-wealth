import type { ReactNode } from 'react'
import styles from './Table.module.css'

export interface TableColumn<T> {
  id: string
  header: string
  cell: (row: T) => ReactNode
  align?: 'left' | 'right'
}

interface TableProps<T> {
  caption: string
  columns: TableColumn<T>[]
  rows: T[]
  getRowKey: (row: T, index: number) => string
  emptyMessage?: string
}

export function Table<T>({
  caption,
  columns,
  rows,
  getRowKey,
  emptyMessage = 'No data available.',
}: TableProps<T>) {
  if (rows.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className={column.align === 'right' ? styles.alignRight : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={getRowKey(row, index)}>
              {columns.map((column) => (
                <td
                  key={column.id}
                  className={column.align === 'right' ? styles.alignRight : undefined}
                >
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
