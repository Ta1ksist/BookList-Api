namespace BookList.Api.Contracts;

public record BookResponse(
    Guid Id,
    string Title,
    string Description,
    string Author,
    int Year
);