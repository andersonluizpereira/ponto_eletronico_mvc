import amqplib from 'amqplib'

export class RabbitmqAdapter {
  async publishToQueue (queueName: string, body: Buffer): Promise<Boolean> {
    const serverProperties: string = 'amqp://usuario:senha@0.0.0.0:5672/vhost'
    const connection = await amqplib.connect(serverProperties)
    const channel = await connection.createChannel()
    const queueChannel = await channel.sendToQueue(queueName, body)
    await channel.close()
    return queueChannel
  }
}
