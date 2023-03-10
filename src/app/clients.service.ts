import {inject, Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

export interface Client {
    firstname: string;
    lastname: string;
}

@Injectable({ providedIn: 'root' })
export class ClientsService {
    private readonly af = inject(AngularFirestore);

    public clients$: Observable<Client[]> = this.af.collection<Client>('clients').valueChanges();

}
