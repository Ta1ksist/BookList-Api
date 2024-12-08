using BookList.DataAccess;
using BookList.DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace BookList.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookContext _context;
        public BookController(BookContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var books = await _context.Books.ToListAsync();
            return Ok(books);
        }

        [HttpPost]
        public async Task<IActionResult> Add([Bind("Id, Title, Description, Author, Year")] Book book)
        {
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
            return Ok(book);
        }

        // [Bind("Id, Title, Description, Author, Year")] 
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<List<Book>>> Update(Guid id, Book book)
        {
            var existingBook = await _context.Books.FindAsync(id);
            if (existingBook == null) return NotFound();

            existingBook.Title = book.Title;
            existingBook.Description = book.Description;
            existingBook.Author = book.Author;
            existingBook.Year = book.Year;

            await _context.SaveChangesAsync();
            return NoContent();
            // if(id != book.Id)
            // {
            //     return NotFound();
            // }
            // if (!ModelState.IsValid)
            // {  
            //     return BadRequest(ModelState); 
            // }
            // try
            // {
            //     _context.Update(book);
            //     await _context.SaveChangesAsync();
            //     return NoContent();
                
            // }
            // catch (DbUpdateConcurrencyException)
            // {
            //     if (!await BookExistsAsync(book.Id))
            //     {
            //         return NotFound();
            //     }
            //     else
            //     {
            //         throw;
            //     }
            // }
        }

        private async Task<bool> BookExistsAsync(Guid id)
        {
           return await _context.Books.AnyAsync(e => e.Id == id);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var book = await _context.Books.FindAsync(id);
            if(book != null)
            {
                _context.Books.Remove(book);
                _ = new Book {};
                _context.Entry(book).State = EntityState.Deleted;
                await _context.SaveChangesAsync();
                return NoContent();
            }
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}