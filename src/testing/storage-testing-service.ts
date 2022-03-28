export class StorageTestinggService {

    private key: string = "";

    private localStorage: object | string | number | boolean = false;
    
    
    getFromLocalStorage(key: string): string | null {
        this.key = key
        if (typeof this.localStorage === 'string') {
            return this.localStorage;
        }
        return this.key;
    }

    saveToLocalStorage(key: string, value: object | string | number | boolean): boolean {
        this.key = key;
        this.localStorage = value;
        return true;
    }

    eraseFromLocalStorage(key: string) {
        this.key = key;
        this.localStorage = false;
    }
}