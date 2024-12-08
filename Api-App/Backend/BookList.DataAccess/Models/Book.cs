namespace BookList.DataAccess.Models;

public class Book
{
    public Guid Id { get; private set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public int Year { get; set; }

    public Book()
    {
    }
    public Book(Guid id, string title, string description, string author, int year)
    {
        Id = id;
        Title = title;
        Description = description;
        Author = author;
        Year = year;
    }
}