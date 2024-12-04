using System;
using BookList.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace BookList.DataAccess;

public class BookContext : DbContext
{
    public BookContext (DbContextOptions<BookContext> options)
    :base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=Book;Username=postgres;Password=postgres");
            // ,b => b.MigrationsAssembly("BookList.Api"));
    }

    public DbSet<Book> Books { get; set; }
}
