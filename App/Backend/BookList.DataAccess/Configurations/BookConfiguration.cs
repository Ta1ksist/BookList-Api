using BookList.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace BookList.DataAccess.Configurations;

public class BookConfiguration : IEntityTypeConfiguration<BookEntity>
{
    public void Configure(EntityTypeBuilder<BookEntity> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Title).IsRequired().HasMaxLength(100);

        builder.Property(x => x.Description).IsRequired().HasMaxLength(255);

        builder.Property(x => x.Author).IsRequired();

        builder.Property(x => x.Year).IsRequired();
    }
}