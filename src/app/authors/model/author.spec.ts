import { Book, Author } from './author';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(1, 'test', 'test', 1)).toBeTruthy();
  });

  describe('Book', () => {
    it('should create an instance', () => {
      expect(new Book(1, 'test', 'test', 1)).toBeTruthy();
    });

    it('should accept optional parameters', () => {
      const author = new Author(1, 'John', 'Doe');
      const book = new Book(1, 'test', 'test', 1, [author], 2023, 'A test book');
      expect(book.authors).toContain(author);
      expect(book.year).toBe(2023);
      expect(book.description).toBe('A test book');
    });

    it('should have default values for optional parameters', () => {
      const book = new Book(1, 'test', 'test', 1);
      expect(book.authors).toBeUndefined();
      expect(book.year).toBeUndefined();
      expect(book.description).toBeUndefined();
    });
  });

  describe('Author', () => {
    it('should create an instance', () => {
      expect(new Author(1, 'John', 'Doe')).toBeTruthy();
    });

    it('should accept optional parameters', () => {
      const book = new Book(1, 'test', 'test', 1);
      const author = new Author(1, 'John', 'Doe', [book], 'A test author');
      expect(author.books).toContain(book);
      expect(author.bio).toBe('A test author');
    });

    it('should have default values for optional parameters', () => {
      const author = new Author(1, 'John', 'Doe');
      expect(author.books).toBeUndefined();
      expect(author.bio).toBeUndefined();
    });
  });
});
