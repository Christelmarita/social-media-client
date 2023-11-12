import { login } from './login';

const pass_email = 'user@noroff.no';
const pass_password = '123password';
const fakeToken = '123token';
const profile = {
  name: 'Name',
  email: pass_email,
};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    accessToken: fakeToken,
    ...profile,
  }),
});

describe('login', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('logs in successfully and saves the token and profile', async () => {
    global.fetch = mockFetchSuccess;

    const data = await login(pass_email, pass_password);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'token',
      expect.any(String),
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'profile',
      expect.any(String),
    );
  });
});
