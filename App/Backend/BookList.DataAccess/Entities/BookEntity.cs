namespace BookList.DataAccess.Entities;

public class BookEntity
{
    public Guid Id { get; set; }
    public string Title { get; set;  } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public int Year { get; set; }
}