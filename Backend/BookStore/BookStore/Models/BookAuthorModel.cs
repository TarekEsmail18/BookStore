using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Models
{
    public class BookAuthorModel
    {
        public int ID { set; get; }
        public string Name { set; get; }
        public string Categories { set; get; }
        public int Price { set; get; }
        public string Image { set; get; }
        public int AuthorId { set; get; }
        public string Author { set; get; }
    }
}
