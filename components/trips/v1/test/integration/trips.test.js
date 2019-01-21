const { Service } = require('../../services');

describe('CRUD on tests', () => {
  beforeAll(async() =>{
    require('../../../../../app');
  });
  afterEach(async () => {
    await Service.deleteAll();
  });
  it('should create a trip', async () => {
    const testData =
    {
      "from": "Down-Town",
      "to": "Zamalek",
      "status": "arrived"
    }
    const res = await Service.addOne(testData);
    expect(res.data).not.toBeNull();
  });

  it('should get all trips data', async () => {
    const res = await Service.getAll();
    expect(res.data).not.toBeNull();
  });
  
});