import { createConnection, Connection } from 'typeorm';
import { AsyncErrorHandler } from '../decorators/error-handler';

/**
 * Controller create a connection to the database which is defined in ormconfig.json
 */
export default class Controller {
  @AsyncErrorHandler()
  public static async getConnection() {
    if (!this.connection) {
      this.connection = await createConnection();
    }
    return this.connection;
  }
  private static connection: Connection;
}
