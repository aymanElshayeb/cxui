import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CmsServiceService {

  constructor(private http: HttpClient) { }

  //getContent():string{
  //  return "just test Service output";
  //}

  getContent(url:string):Observable<string> {

    return this.http.get<any>(url,{ responseType:'text'  });
  // return this.http.get<string>(url);
  }

}
