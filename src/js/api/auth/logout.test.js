import { logout } from './logout';
import { remove } from '../../storage/index';

jest.mock('../../storage/index', () => ({
    remove: jest.fn(),
}));

describe('logout', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('clears the token and profile from browser storage', () => {
        logout();
        
        expect(remove).toHaveBeenCalledWith('token');
        expect(remove).toHaveBeenCalledWith('profile');
    });
});
