import { SQLite } from 'expo-sqlite';
import User from './models/User';
import Virtue from './models/Virtue';
import VirtueTracker from './models/VirtueTracker';
import { benFranklin } from './create-defaults';

export const createTables = async (forceDrop = false) => {
  forceDrop && dropTables();
  console.log('the tables should bve dropped by now');

  // check to see if there's data in the db
  try {
    console.log('checking for user');
    try {
      await User.find(1).then(res => console.log(res));
      console.log(
        'The tables already exist. Please add the forceDrop flag if you need to start from scratch'
      );
      // Data (and table) found, notify the user that they need to forceDrop
      return;
    } catch (error) {
      console.log('No tables found, go to town');
      // No tables found, go to town
      console.log('Creating User table');
      try {
        await User.createTable();
      } catch (error) {
        console.log(error);
      }
      console.log('Creating Virtue table');
      await Virtue.createTable();
      console.log('Creating VirtueTracker table');
      await VirtueTracker.createTable();
      console.log('Tables created');
      createDefaults(benFranklin);
      console.log('Ben Franklin loaded');
      const ben = await User.find(1);
      console.log('ben', ben);
    }
  } catch (error) {
    console.log(error => console.log(error));
  }
};

const dropTables = () => {
  console.log('Dropping tables...');
  Promise.all(User.dropTable(), Virtue.dropTable(), VirtueTracker.dropTable())
    .then(() => console.log('Tables droped.'))
    .catch(err => console.log(err));
};

export const createUser = async (userName, password) => {
  const user = {
    userName,
    password
  };
  User.create(user)
    .then(res => console.log(res))
    .catch(err => console.log('UserError:', err));
};

export const createVirtue = async (userId, virtueName, virtueDescription) => {
  const virtue = {
    userId,
    virtueName,
    virtueDescription
  };
  Virtue.create(virtue)
    .then(res => console.log(res))
    .catch(err => console.log('VirtueError:', err));
};

export const createVirtueTracker = async (virtueId, value) => {
  const virtueTracker = {
    virtueId,
    value
  };
  VirtueTracker.create(virtueTracker)
    .then(res => console.log(res))
    .catch(err => console.log('VirtueTrackerError:', err));
};

const updateVirtueTracker = async (id, newValue) => {
  const virtueTracker = {
    id,
    value: newValue
  };
  VirtueTracker.update(virtueTracker);
};

const createDefaults = async defaults => {
  await createUser(defaults.user);
  await createVirtue(defaults.virtues);
  await createVirtueTracker(defaults.values);
};

// export const login = (userName, password) => {
//   // TODO: update to use native login secure blah blah
//   return true;
// };

// export const createUser = (userName, password) => {
//   const query = `insert into users (userName, password) values (${userName}, ${password});`;
//   return executeQuery(query).catch(err => console.log(err));
// };

// export const getVirtues = userId => {
//   const query = `
//     select
//       v.*
//     from
//       virtues v
//     where
//       v.userId = ${userId}`;
//   return executeQuery(query).catch(err => {
//     console.log('err', err);
//   });
// };

// export const addVirtue = async (userId, virtueName, virtueDescription) => {
//   const query = `insert into virtues (userId, virtueName, virtueDescription) values (${userId}, '${virtueName}', '${virtueDescription}')`;
//   await executeQuery(query).catch(err => console.log(err));
//   return getVirtues(userId).catch(err => console.log(err));
// };

// export const deleteVirtue = (userId, virtueId) => {
//   db.transaction(tx => {
//     tx.executeSql(`delete from virtues where userId = ? and id = ?`, [
//       userId,
//       virtueId
//     ]);
//   });
// };

// export const getVirtueData = (virtueId, limit = 20, order = 'asc') => {
//   const query = `
//     select
//       timestamp,
//       value
//     from
//       (select
//         timestamp,
//         value
//       from
//         VirtueTracker
//       where
//         virtueId = ${virtueId}
//       order by
//         timestamp desc
//       limit ${limit})
//     order by
//       timestamp ${order}
//     limit ${limit}`;
//   return executeQuery(query).catch(err => console.log(err));
// };

// export const addVirtueData = (virtueId, value) => {
//   const date = new Date();
//   const sqliteDate = date.toISOString();
//   const query = `
//     insert into
//       virtueTracker (
//         timestamp,
//         virtueId,
//         value
//     )
//     values (
//       '${sqliteDate}',
//       ${virtueId},
//       ${value}
//     )
//   `;
//   return executeQuery(query).catch(err => console.log(err));
// };
