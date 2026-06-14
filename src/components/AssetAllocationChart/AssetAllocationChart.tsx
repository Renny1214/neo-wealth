import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { AllocationItem } from '@/types'
import { ASSET_CLASS_COLORS } from '@/constants/chartTheme'
import { SectionTitle } from '@/components/SectionTitle'
import { formatWeight } from '@/utils/portfolioFormatters'
import styles from './AssetAllocationChart.module.css'

interface AssetAllocationChartProps {
  allocation: AllocationItem[]
}

export function AssetAllocationChart({ allocation }: AssetAllocationChartProps) {
  const chartData = allocation.map((item) => ({
    name: item.assetClass,
    value: item.currentPct,
  }))

  return (
    <div>
      <SectionTitle title="Asset Allocation" subtitle="Current portfolio mix" />
      <div className={styles.chart} role="img" aria-label="Donut chart of current asset allocation">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={2}
            >
              {allocation.map((item) => (
                <Cell key={item.assetClass} fill={ASSET_CLASS_COLORS[item.assetClass]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatWeight(Number(value))} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
