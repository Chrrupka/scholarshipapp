import ApplicationModel from '../app/models/application';
import AttachmentModel from '../app/models/attachment';
import DetailsModel from '../app/models/details';
import StudentModel from '../app/models/student';
import config from '../app/config';
import mongoose from 'mongoose';
import PasswordModel from '../app/models/password';
import Promise from 'bluebird';
import TokenModel from '../app/models/token';
import UserModel from '../app/models/user';

function prepare() {
  return UserModel.deleteMany({})
    .then(() => {
      return TokenModel.deleteMany({});
    }).then(() => {
      return PasswordModel.deleteMany({});
      }).then(() => {
        return ApplicationModel.deleteMany({});
      }).then(() => {
        return AttachmentModel.deleteMany({});
      }).then(() => {
        return DetailsModel.deleteMany({});
      }).then(() => {
        return StudentModel.deleteMany({});
    });
}

function seed() {
  return UserModel.create(require('./seedSchemas/user.json'))
    .then(() => {
      return PasswordModel.create(require('./seedSchemas/password.json'));
    })
      .then(() => {
        return ApplicationModel.create(require('./seedSchemas/application.json'));
      })
      .then(() => {
        return AttachmentModel.create(require('./seedSchemas/attachment.json'));
      })
      .then(() => {
        return DetailsModel.create(require('./seedSchemas/details.json'));
      })
      .then(() => {
        return StudentModel.create(require('./seedSchemas/student.json'));
      });
}

(function run() {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if (error) {
      console.error(error);
    } else {
      console.info('Connect with database established');
    }
  });

  console.info(`Seeding script starts at ${new Date()}`);

  return Promise.resolve().then(() => {
    return prepare();
  }).then(() => {
    return seed();
  }).catch(error => {
    console.error(`error: ${error}`);
    process.exit(1);
  }).finally(function () {
    mongoose.connection.close(() => {
      console.error('Connection with database closed');
      console.info(`Seeding script finished at ${new Date()}`);
      process.exit(0);
    });
  });
})();
