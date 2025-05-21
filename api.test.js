import { postAPI } from './src/services/Api.jsx'; 


describe('API Service Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('TEST 1: should successfully post API and return a non-error response', async () => {
    const mockResponseData = { id: 1, status: 'created' };

    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockResponseData),
    });

    const result = await postAPI('/some-resource', { name: 'Test Data' });

    // Assertions
    expect(result).toEqual({ error: false, response: mockResponseData });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:8080/api/some-resource',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ name: 'Test Data' }),
        headers: expect.objectContaining({ 'Content-Type': 'application/json' }),
      })
    );
  });

  
  test('TEST 2: should return an error response for a 400 Bad Request', async () => {
    const mockErrorData = { message: 'Validation failed', code: 'INVALID_INPUT' };

   
    fetch.mockResolvedValueOnce({
      ok: false, 
      status: 400,
      json: () => Promise.resolve(mockErrorData),
    });

    const result = await postAPI('/invalid-resource', { bad: 'data' });

    // Assertions
    expect(result).toEqual({ error: true, response: mockErrorData });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:8080/api/invalid-resource',
      expect.any(Object) 
    );
  });
});