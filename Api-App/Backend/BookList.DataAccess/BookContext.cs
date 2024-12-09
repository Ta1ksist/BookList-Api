using BookList.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace BookList.DataAccess;

public class BookContext : DbContext
{
    public BookContext (DbContextOptions<BookContext> options)
    :base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseNpgsql("Host=localhost;Port=5433;Database=Book;Username=postgres;Password=postgres");
    }

    public DbSet<Book> Books { get; set; }
}