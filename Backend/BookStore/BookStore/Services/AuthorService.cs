using BookStore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BookStore.Services
{
    public class AuthorService : IAuthorRepository
    {
        private readonly Context context;

        public AuthorService(Context context)
        {
            this.context = context;
        }
        public IEnumerable<Author> GetAuthor()
        {
            return context.authors.Select(author => new Author
            {
                Id = author.Id,
                Age = author.Age,
                bookId = author.bookId,
                Country = author.Country,
                DateOfBirth = author.DateOfBirth,
                Name = author.Name,
            });
        }

        public Author GetAuthorById(int Id)
        {
            Author author = context.authors.Include(b=> b.Books).Where(a => a.Id == Id).FirstOrDefault();
            return author;
        }





        public string AddAuthor(Author author)
        {
            context.authors.Add(author);
            context.SaveChanges();
            return "Author Added succeeded";
        }


        public string UpdateAuthor(Author author, int Id)
        {
            Author author1 = context.authors.Where(a => a.Id == Id).FirstOrDefault();
            if(author1 != null)
            {
                author1.Name = author.Name;
                author1.Country = author.Country;
                author1.Age = author.Age;
                author1.DateOfBirth = author.DateOfBirth;
                author1.bookId = author.bookId;
                context.SaveChanges();
                return "Updated!";
            }
            else
            {
                return "NotFound!";
            }
        }



        public HttpResponseMessage DeleteAuthor(int Id)
        {
            Author author = context.authors.Where(a => a.Id == Id).FirstOrDefault();
            if(author == null)
            {
                 throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            else
            {
                context.authors.Remove(author);
                context.SaveChanges();
                var response = new HttpResponseMessage();
                response.Headers.Add("DeleteMessage", "Successfully Deleted!");
                return response;
            }
        }


    }
}
