import { Observable, of } from 'rxjs';
import { User } from '../app/interfaces/user';
import { returnFakeUser } from './testing-tools';

export class UsersTestingService {

    getCurrentSavedUser(): User | null {
        const user: User = returnFakeUser();
        return user;
    }

    isRegisteredUser(): boolean {
        return true;
    }

    getIsUserLoged$(): Observable<boolean> {
        return of(true);
    }

    getUserLoged(): User | null | undefined {
        const user: User = returnFakeUser();
        return user;
    }

    add(newUser: User): boolean {
        if (newUser.username !== '') {
            return true;
        }
        return false;
    }

    log(user: User): number {
        return user.username.length;
    }

    logOut(): void {
        console.log('user testing log out');
    }
}