import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/services/bookServices.service';
import { Book } from 'src/app/ViewModel/Book';

@Component({
  selector: 'app-AddBook',
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css']
})
export class AddBookComponent implements OnInit {

  BookData:Book;
  BookDataToDataBase:any;
  PhotoFileName:string = "";
  PhotoFilePath:string = "";


  constructor(private BookServices: BookServicesService, private router: Router) {

    this.BookData = {name:"",author:"",categories:"",price:0};

   }

  ngOnInit() {
  }

  OnSubmit()
  {

    this.BookDataToDataBase = {
      name: this.BookData.name,
      author: this.BookData.author,
      categories: this.BookData.categories,
      price: this.BookData.price,
      image: this.PhotoFileName
    }

    this.BookServices.AddBook(this.BookDataToDataBase).subscribe(
      ()=>
      {
        this.router.navigateByUrl('/Admin');
      }
    );
  }


  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.BookServices.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.BookServices.PhotoUrl+this.PhotoFileName;
      console.log(this.PhotoFileName);
    })
  }


}
