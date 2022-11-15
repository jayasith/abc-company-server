describe('GET @ /users endpoint', () => {
  it('should return an users array and return status code 200', async () => {
    try {
      const res = axios.get('http://localhost:5000/user/', {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2ZTkzNzkyMmZiZmY4YWMxN2E5OTk2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTI4ODI5fQ.1Q48Y9matonsizhXVKOE33M3OxAniYB0dDKV-NeaUOE',
        },
      });

      expect(res.status).toEqual(200);
      expect(typeof res.data).toEqual('Object');
    } catch (error) {
      console.log(error);
    }
  });
});

describe('POST @ /user/register endpoint', () => {
  it('should register worker', async () => {
    try {
      const res = axios.post(
        'http://localhost:5000/user/register',
        {
          name: 'Thushara Thiwanka',
          username: 'thushara',
          email: 'thushara@gmail.com',
          role: 'worker',
        },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2ZTkzNzkyMmZiZmY4YWMxN2E5OTk2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTI4ODI5fQ.1Q48Y9matonsizhXVKOE33M3OxAniYB0dDKV-NeaUOE',
          },
        }
      );

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});

describe('POST @ /user/register endpoint', () => {
  it('should register manager', async () => {
    try {
      const res = axios.post(
        'http://localhost:5000/user/register',
        {
          name: 'Thushara Thiwanka',
          username: 'thushara',
          email: 'thushara@gmail.com',
          role: 'manager',
        },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2ZTkzNzkyMmZiZmY4YWMxN2E5OTk2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTI4ODI5fQ.1Q48Y9matonsizhXVKOE33M3OxAniYB0dDKV-NeaUOE',
          },
        }
      );

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});

describe('POST @ /user/login endpoint', () => {
  it('should login an worker', async () => {
    try {
      const res = axios.post('http://localhost:5000/user/login', {
        username: 'worker1',
        password: 'XmFVww',
      });

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});

describe('POST @ /user/login endpoint', () => {
  it('should login an manager', async () => {
    try {
      const res = axios.post('http://localhost:5000/user/login', {
        username: 'manager1',
        password: 'NZIDiz',
      });

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});

describe('GET @ /users/:id endpoint', () => {
  it('should return an customer object', async () => {
    try {
      const res = axios.get(`http://localhost:5000/user/6368c449408089790aec9837`, {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2ZTkzNzkyMmZiZmY4YWMxN2E5OTk2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTI4ODI5fQ.1Q48Y9matonsizhXVKOE33M3OxAniYB0dDKV-NeaUOE',
        },
      });

      expect(res.status).toEqual(200);
      expect(typeof res.data).toEqual('Object');
    } catch (error) {
      console.log(error);
    }
  });
});

describe('GET @ /users/logged endpoint', () => {
  it('should checked if the user logged in or not', async () => {
    try {
      const res = axios.get(`http://localhost:5000/user/logged`, {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM2ZTkzNzkyMmZiZmY4YWMxN2E5OTk2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTI4ODI5fQ.1Q48Y9matonsizhXVKOE33M3OxAniYB0dDKV-NeaUOE',
        },
      });

      expect(res.status).toEqual(200);
      expect(typeof res.data).toEqual('Object');
    } catch (error) {
      console.log(error);
    }
  });
});
