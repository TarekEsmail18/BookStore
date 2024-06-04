using BookStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BookStore.Services
{
    public interface IAuthorRepository
    {
        IEnumerable<Author> GetAuthor();
        Author GetAuthorById(int Id);
        string AddAuthor(Author author);
        string UpdateAuthor(Author author, int Id);
        HttpResponseMessage DeleteAuthor(int Id);
    }
}
