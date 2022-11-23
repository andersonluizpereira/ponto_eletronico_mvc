import nodemailer from 'nodemailer'
import { EmailAdapter } from '@/infra'

jest.mock('nodemailer', () => ({
  async createTestAccount (): Promise<any> {
    return {
      user: 'anyuser',
      pass: 'anypass'
    }
  },

  createTransport () {
    return {
      sendMail: async () => Promise.resolve({ messageId: 'any' })
    }
  },

  getTestMessageUrl: () => {}
}))

const makeSut = (): any => {
  const clientStub = nodemailer.createTransport()

  const sut = new EmailAdapter(clientStub)

  return { sut, clientStub }
}

type emailParams = {
  to: {
    name: string
    address: string
  }
  subject: string
  html: string
}

const mockMailParams = (): emailParams => ({
  to: {
    name: 'anyname',
    address: 'anymail@mail.com'
  },
  subject: 'any',
  html: 'anyhtml,'
})

describe('NodemailAdapter Test', () => {
  test('should call Nodemailer sendMail with correct values', async () => {
    const { sut, clientStub } = makeSut()

    const transportSpy = jest.spyOn(clientStub, 'sendMail')

    await sut.sendEmail(mockMailParams())

    expect(transportSpy).toHaveBeenCalled()
  })

  test('should throw if Nodemailer sendMail throws', async () => {
    const { sut, clientStub } = makeSut()

    jest
      .spyOn(clientStub, 'sendMail')
      .mockReturnValue(Promise.reject(new Error()))

    await expect(sut.sendEmail(mockMailParams())).rejects.toThrow()
  })

  test('should send an email on success', async () => {
    const { sut } = makeSut()

    await expect(sut.sendEmail(mockMailParams())).resolves
  })
})
