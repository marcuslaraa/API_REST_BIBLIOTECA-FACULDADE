"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroModel = void 0;
class LivroModel {
    constructor(id, title, author, publishedDate, isbn, pages, language, publisher) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.isbn = isbn;
        this.pages = pages;
        this.language = language;
        this.publisher = publisher;
    }
}
exports.LivroModel = LivroModel;
