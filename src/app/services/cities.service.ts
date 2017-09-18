import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class CitiesService {
    url = "/data/world_cities.json";
 
    constructor(private http: Http) {}

   /* postJSON()
    {
        let body : any = {
            name:'Brad'
        }

        let headers  = new Headers({'Content-Type': "application/json"});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options ).map((res: Response) => res.json());
    } */

    getCities()
    {
        return this.http.get(this.url)
                .map((response:Response) => response.json())
    }
}