/* eslint-disable @typescript-eslint/no-misused-promises */
import { SomeServiceCheck } from '../health/some-service.check'
import { HealthService } from '@/config/services/health-service'
import { Router } from 'express'
import { ResourceHealth } from '@/config/enums/resource-health.enum'

const healthRoutes = Router()

healthRoutes.get('/health', async (req, res) => {
  const healthService = new HealthService(
    [
      new SomeServiceCheck()
      // Add more checks here...
    ]
  )

  const healthResults = await healthService.getHealth()

  res.status(healthResults.status === ResourceHealth.Healthy ? 200 : 503)
    .send({
      status: healthResults.status, dependencies: healthResults.results
    })
})

export { healthRoutes }
