import { Redis as RedisClient } from 'ioredis'

export class RedisAdapter {
  constructor (private readonly client: RedisClient) {}

  async clear (key: string): Promise<void> {
    await this.client.del(key)
  }

  async save (key: string, data: any): Promise<void> {
    await this.client.set(key, JSON.stringify(data))
  }

  async load<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key) as any

    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return null
  }
}
