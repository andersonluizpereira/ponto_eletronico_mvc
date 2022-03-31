import { ResourceHealth } from '@/config/enums/resource-health.enum'

export abstract class HealthIndicator {
  abstract name: string
  status: ResourceHealth = ResourceHealth.Unhealthy
  details: string | undefined

  abstract checkHealth (): Promise<void>
}
