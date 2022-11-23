import nodemailer, { Transporter } from 'nodemailer'

type emailParams = {
  to: {
    name: string
    address: string
  }
  subject: string
  html: string
}
export class EmailAdapter {
  constructor (private readonly client: Transporter) {}

  async sendEmail ({ to, subject, html }: emailParams): Promise<void> {
    const name: string = 'Jounal'
    const address: string = 'journalcarlucci@mailinator.com'
    await this.client.sendMail({
      from: {
        name,
        address
      },
      to,
      subject,
      html
    })
  }
}
