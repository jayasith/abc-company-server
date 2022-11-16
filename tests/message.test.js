const axios = require('axios');

describe('POST @ /message/worker/save endpoint', () => {
  it('should save woker message', async () => {
    try {
      const res = axios.post(
        'http://localhost:5000/message/worker/save',
        {
          message: "Hello, I'm worker",
          userId: '6368c449408089790aec9837',
        },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2OGM0NDk0MDgwODk3OTBhZWM5ODM3Iiwicm9sZSI6IndvcmtlciIsImlhdCI6MTY2ODUzMTEyOX0.5VpuOmqQHDpsy5veWvnuOj-W44VqN1bXUC40HBwio_w',
          },
        }
      );

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});
describe('POST @ /message/manager/save endpoint', () => {
  it('should save woker manager', async () => {
    try {
      const res = axios.post(
        'http://localhost:5000/message/manager/save',
        {
          message: "Hello, I'm manager",
          userId: '6368c449408089790aec9837',
        },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2OGNlNjVlOGY4NDdkNDg1YzZjY2QxIiwicm9sZSI6Im1hbmFnZXIiLCJpYXQiOjE2Njg1MzA3OTF9.m2hO_f3wFshHN0ekK-vy5YDyLkvvwZzVHpA1JfGVg_E',
          },
        }
      );

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});
