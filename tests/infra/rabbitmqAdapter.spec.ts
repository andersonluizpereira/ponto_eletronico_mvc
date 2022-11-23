import { RabbitmqAdapter } from '@/infra'
import amqplib from 'amqplib'

jest.mock('amqplib', () => {
  return {
    connect: jest.fn(
      async (): Promise<any> => {
        return {
          createChannel: jest.fn(
            async (): Promise<any> => {
              return {
                sendToQueue: jest.fn(
                  async (): Promise<any> => {
                    return true
                  }
                ),
                close: jest.fn()
              }
            }
          )
        }
      }
    )
  }
})

const makeSut = (): any => {
  const sut = new RabbitmqAdapter()
  return { sut }
}

const mockQueueParams = (): any => ({
  queueName: 'any_queue',
  body: Buffer.from('any_body')
})

describe('RabbitmqAdapter Test', () => {
  test('should call amqplib sendMessage with correct values', async () => {
    const { sut } = makeSut()

    const queueName = await sut.publishToQueue(mockQueueParams())
    expect(queueName).toBe(true)
  })
  test('should call amqplib sendMessage with error values', async () => {
    const { sut } = makeSut()
    jest.spyOn(sut, 'publishToQueue').mockReturnValue(Promise.reject(new Error()))
    await expect(sut.publishToQueue(mockQueueParams())).rejects.toThrow()
  })
})
