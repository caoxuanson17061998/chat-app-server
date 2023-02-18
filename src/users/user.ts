import { CreateUserDetails } from '../utils/types';

export interface IUSerService {
  createUser(useDetails: CreateUserDetails);
}
