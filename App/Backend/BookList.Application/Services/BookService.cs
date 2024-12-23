using BookList.Core.Abstactions;
using BookList.Core.Models;

namespace BookList.Application.Services;

public class BookService : IBookService
{
    private readonly IBookRepository _bookRepository;

    public BookService(IBookRepository bookRepository)
    {
        _bookRepository = bookRepository;
    }

    public async Task<List<Book>> GetBooks()
    {
        return await _bookRepository.Get();
    }

    public async Task<Guid> AddBook(Book book)
    {
        return await _bookRepository.Add(book);
    }

    public async Task<Guid> UpdateBook(Guid id, string title, string description, string author, int year)
    {
        return await _bookRepository.Update(id, title, description, author, year);
    }

    public async Task<Guid> DeleteBook(Guid id)
    {
        return await _bookRepository.Delete(id);
    }
}
    
    