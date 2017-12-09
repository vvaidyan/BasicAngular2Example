import { Component } from "angular2/core";
import { AuthorService } from "./author.service";


@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{ title }}
    <ul>
        <li *ngFor="#auth of authorlist">
            {{ auth }}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent{
    title = 'Title for authors page'; 
    
    authorlist: string[]; 

    //authorlist = ["Author1", "Author2", "Author3"];

    constructor(authorService: AuthorService)
    {
        //new AuthorService();
        this.authorlist = authorService.getAuthors();
    }

}
