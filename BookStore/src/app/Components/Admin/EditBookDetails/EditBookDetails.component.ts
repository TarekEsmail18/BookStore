import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServicesService } from 'src/app/services/bookServices.service';
import { Book } from 'src/app/ViewModel/Book';

@Component({
  selector: 'app-EditBookDetails',
  templateUrl: './EditBookDetails.component.html',
  styleUrls: ['./EditBookDetails.component.css']
})
export class EditBookDetailsComponent implements OnInit {

  bookbyid: Book;
  PhotoFileName:string = "";
  PhotoFilePath:string = "";
  
  constructor(private activateRoute: ActivatedRoute,private bookServices: BookServicesService, private router: Router) { 
    this.bookbyid = {id:0,name:"",author:"",categories:"",price:0};
  }

  ngOnInit() {

    const bookID = this.activateRoute.snapshot.params['id']
    this.bookServices.getBookByIdFromDataBase(bookID).subscribe(
      (data)=>{
        this.bookbyid = data;
      }
    );
  }
  


  OnSubmit()
  {
    this.bookbyid = {
      name: this.bookbyid.name,
      author: this.bookbyid.author,
      categories: this.bookbyid.categories,
      price: this.bookbyid.price,
      image: this.PhotoFileName
    }
    const bookID = this.activateRoute.snapshot.params['id']
    this.bookServices.UpdateBook(bookID,this.bookbyid).subscribe(
      ()=>{
        this.router.navigateByUrl('/Admin');
      }
    );
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.bookServices.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.bookServices.PhotoUrl+this.PhotoFileName;
      console.log(this.PhotoFileName);
    })
  }

}
