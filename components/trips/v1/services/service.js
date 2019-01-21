const { Model } = require("../models");

class Service {
  async getAll() {
    const data = await Model.getAll();
    return data;
  }

  async getOne(id) {
      const data = await Model.getOne(id);
      return data;
  }

  async addOne(body) {
    const res = await Model.addOne(body);
    return res;
  }

  async updateOne(id, body) {
      const dbInstance = await Model.updateOne(id, body);
      return { data: dbInstance };

  }

  async deleteOne(id) {
      await Model.deleteOne({ _id: id });
      return { data: true };
  }

  async deleteAll() {
    await Model.deleteAll();
    return { data: true };
  }

  async addLocation(id, body) {
    const dbInstance = await Model.addLocation(id, body);
    return { data: dbInstance };
  }

}

module.exports = Service;
