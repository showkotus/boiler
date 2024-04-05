// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { infoLogger, errorLogger } from './shared/loggers'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('Database connected succefully')
    app.listen(config.port, () => {
      infoLogger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Database connection failure.', err)
  }
}

main()
