import * as mongoose from 'mongoose'

class Database {
  private readonly DB_URL = 'mongodb://localhost:27017/db_portal'

  async createConnection (): Promise<void> {
    void mongoose.connect(this.DB_URL)
  }
}

export default new Database()
