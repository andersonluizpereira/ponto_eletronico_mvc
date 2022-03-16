class Helper {
  async sendResponse (res: any, statusCode: number, data: any): Promise<any> {
    res.status(statusCode).json({ result: data })
  }
}

export default new Helper()
