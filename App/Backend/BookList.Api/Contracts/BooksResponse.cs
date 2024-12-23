namespace BookList.Api.Contracts;

public record BooksResponse(
    Guid Id,
    string Title,
    string Description,
    string Author,
    int Year
    );