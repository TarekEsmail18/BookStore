using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Age { get; set; }
        public string DateOfBirth { get; set; }

        [ForeignKey("bookId")]
        public int bookId { get; set; }
        public virtual List<Book> Books { get; set; }
    }
}
