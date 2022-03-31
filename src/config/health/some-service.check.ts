/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosResponse } from 'axios'
import { HealthIndicator } from '@/config/health/health-indicator'
import { ResourceHealth } from '@/config/enums/resource-health.enum'

export class SomeServiceCheck extends HealthIndicator {
  name: string = 'API PONTO_ELETRONICO_MVC'

  async checkHealth (): Promise<void> {
    let result: AxiosResponse<any>
    try {
      const pingURL = 'http://localhost:3000/'
      result = await axios(pingURL)

      if (result.status === 200) {
        this.status = ResourceHealth.Healthy
      } else {
        this.status = ResourceHealth.Unhealthy
        this.details = `Received status: ${result.status}`
      }
    } catch (error) {
      const server_error = JSON.stringify(new Error(error as any))
      this.status = ResourceHealth.Unhealthy
      this.details = server_error
      console.log(`HEALTH: ${this.name} is unhealthy.`, server_error)
    }
  }
}
