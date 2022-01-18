import { Connection, ConnectionOptions, createConnection } from 'typeorm';

import { User } from './models';

import 'dotenv/config';

const entities = [User];

const options: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: false,
  entities,
  synchronize: true,
  cli: { entitiesDir: './models' },
};

const getConnection = async (connectionOptions: ConnectionOptions): Promise<Connection> => {
  try {
    const connection = await createConnection(connectionOptions);

    console.log('Successfully connected to postgres!');
    return connection;
  } catch (error) {
    console.log('Error: could not connect to postgres!');
    throw new Error(error);
  }
};

export const TypeormHelper = {
  connection: null as Connection,
  async connect(): Promise<Connection> {
    const connection = await getConnection(options);
    await connection.synchronize();
    this.connection = connection;

    return this.connection;
  },
};
