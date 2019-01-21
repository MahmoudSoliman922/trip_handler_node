const dbModel = require("../TripsSchema");

class Model {
  async getAll() {
    let error = { message: 'can-not-retrieve-from-db', statusCode: 500 };
    try {
      const data = await dbModel.find({});
      return data;
    } catch (ex) {
      return { error };
    }
  }

  async getOne(id) {
    let error = { message: 'can-not-retrieve-from-db', statusCode: 500 };
    try {
      const data = await dbModel.findOne({ _id: id });

      (error.message = 'not-found'), (error.statusCode = 404);
      if (!data) throw new Error();
      return data;
    } catch (ex) {
      return { error };
    }
  }

  async addOne(body) {

    let error = { message: 'can-not-be-saved-to-db', statusCode: 500 };
    try {
      const dbInstance = new dbModel(body);
      await dbInstance.save();
      return dbInstance;
    } catch (ex) {
      return { error };
    }
  }

  async updateOne(id, body) {
    let error = { message: 'bad-request', statusCode: 400 };
    try {
      const tripStatus = ['waiting', 'ongoing', 'completed']
      const data = await dbModel.findOne({ _id: id });
      if (tripStatus.indexOf(body.status) === -1) {
        return { msg: `invalid status.`}
      } else if (tripStatus.indexOf(data.status) > tripStatus.indexOf(body.status)) {
        return { msg: `status can be only changed in one direction.`}
      } else {
        (error.message = `can-not-be-saved-to-db`), (error.statusCode = 500);
        const dbInstance = await dbModel.findByIdAndUpdate(id, body, {
          new: true
        });
        return { data: dbInstance };
      }
    } catch (ex) {
      return { error };
    }
  }

  async deleteOne(id) {
    let error = { message: 'can-not-retrieve-from-db', statusCode: 500 };
    try {
      const data = await dbModel.findOne({ _id: id });
      (error.message = 'not-found'), (error.statusCode = 404);
      if (!data) throw new Error();
      (error.message = 'error-deleting-doc'), (error.statusCode = 500);
      await dbModel.deleteOne({ _id: id });
      return { data: true };
    } catch (ex) {
      return { error };
    }
  }

  async deleteAll() {
    let error = { message: 'can-not-retrieve-from-db', statusCode: 500 };
    try {
      (error.message = 'error-deleting-doc'), (error.statusCode = 500);
      await dbModel.deleteMany();
      return { data: true };
    } catch (ex) {
      return { error };
    }
  }

  async addLocation(id, body) {
    let error = { message: 'bad-request', statusCode: 400 };

    try {
      (error.message = `can-not-be-saved-to-db`), (error.statusCode = 500);
      const dbInstance = await dbModel.updateOne(
        { _id: id },
        {
          $push: {
            location: body.location
          }
        },
      );
      return { data: dbInstance };
    } catch (ex) {
      return { error };
    }
  }
}

module.exports = Model;
