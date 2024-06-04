using BookStore.Models;
using BookStore.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BookStore.Controllers
{
    [Route("Author")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorRepository authorRepository;

        public AuthorController(IAuthorRepository authorRepository)
        {
            this.authorRepository = authorRepository;
        }


        [HttpGet]
        [Route("GetAuthors")]
        public ActionResult<Author> GetAuthors()
        {
            if(this.authorRepository.GetAuthor() == null)
            {
                return NotFound("No Any Author");
            }
            else
            {
                return Ok(this.authorRepository.GetAuthor());
            }
        }


        [HttpGet("Id")]
        [Route("GetAuthorById")]
        public ActionResult<Author> GetAuthorById(int Id)
        {
            if (this.authorRepository.GetAuthorById(Id) == null)
            {
                return NotFound("Not Found The Author!");
            }
            else
            {
                return Ok(this.authorRepository.GetAuthorById(Id));
            }
        }

        [HttpPost]
        [Route("AddAuthor")]
        public ActionResult AddAuthor(Author author)
        {
            if(author == null)
            {
                return NotFound("there is no Author to Add");
            }
            else
            {
                return Ok(this.authorRepository.AddAuthor(author));
            }
        }


        [HttpPut("Id")]
        [Route("UpdateAuthor")]
        public ActionResult UpdateAuthor(Author author, int Id)
        {
            if(author == null)
            {
                return NotFound("there is no Author To Update");
            }
            else
            {
                return Ok(this.authorRepository.UpdateAuthor(author,Id));
            }
        }


        [HttpDelete("Id")]
        [Route("DeleteAuthor")]
        public HttpResponseMessage DeleteAuthor(int Id)
        {
            return this.authorRepository.DeleteAuthor(Id);
        }

    }
}
