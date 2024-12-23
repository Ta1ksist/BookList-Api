namespace BookList.Core.Models;

public class Book
{
    public const int MaxTitleLength = 100;
    public const int MaxDescriptionLength = 255;
    public Book(Guid id, string title, string description, string author, int year)
    {
        Id = id;
        Title = title;
        Description = description;
        Author = author;
        Year = year;
    }
    
    public Guid Id { get; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public int Year { get; set; }

    public static (Book book, string Error) Add(Guid id, string title, string description, string author, int year)
    {
        var error = string.Empty;
        
        if (title.Length > MaxTitleLength || String.IsNullOrEmpty(title))
        {
            error = "Title is too long";
        }

        if (description.Length > MaxDescriptionLength || String.IsNullOrEmpty(description))
        {
            error = "Description is too long";
        }

        if (year < 0 || year > DateTime.Now.Year)
        {
            error = "Year is out of range";
        }

        var book = new Book(id, title, description, author, year);
        
        return (book, error);
    }
}