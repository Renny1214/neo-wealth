import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { PerformanceSeries } from '@/types'
import { CHART_LINE_COLORS } from '@/constants/chartTheme'
import { SectionTitle } from '@/components/SectionTitle'
import { formatChartDate, formatCompactInr } from '@/utils/portfolioFormatters'
import styles from './PerformanceChart.module.css'

interface PerformanceChartProps {
  series: PerformanceSeries
}

export function PerformanceChart({ series }: PerformanceChartProps) {
  const chartData = series.points.map((point) => ({
    date: formatChartDate(point.date),
    portfolio: point.portfolioValue,
    benchmark: point.benchmarkValue,
  }))

  return (
    <div>
      <SectionTitle
        title="Performance"
        subtitle={`6-month portfolio value vs ${series.benchmarkLabel}`}
      />
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={formatCompactInr} width={72} tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => formatCompactInr(Number(value))} />
            <Legend />
            <Line
              type="monotone"
              dataKey="portfolio"
              name="Portfolio"
              stroke={CHART_LINE_COLORS.portfolio}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="benchmark"
              name={series.benchmarkLabel}
              stroke={CHART_LINE_COLORS.benchmark}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
