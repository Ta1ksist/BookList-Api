namespace BookList.Api.Contracts;

public record BooksRequest(
    string Title,
    string Description,
    string Author,
    int Year
    );