# backend-books

using MySQl

Category
Field:
- id (tipe data int)
- name(tipe data string)
- created_at (tipe data time)
- updated_at (tipe data time)
Path:
- GET localhost:5000/categories (untuk menampilkan seluruh category)
- POST localhost:5000/categories (untuk membuat category baru)
- PATCH localhost:5000/categories/:id (untuk update category yang sudah ada berdasarkan id category)
- DELETE localhost:5000/categories/:id (untuk menghapus data category)
- GET localhost:5000/categories/:id/books (untuk menampilkan seluruh data books berdasarkan id category)

Book
Field:
- id (tipe data int)
- title(tipe data string)
- description (tipe data string)
- image_url(tipe data string)
- release_year(tipe data int)
- price (tipe data string)
- total_page(tipe data int)
- thickness(tipe data string)
- created_at (tipe data time)
- updated_at (tipe data time)
- category_id (tipe data int - terhubung dengan category)<br>
Path:
- GET localhost:8080/books (untuk menampilkan seluruh book)
- POST localhost:8080/books (untuk membuat book baru)
- PATCH localhost:8080/books/:id (untuk update book yang sudah ada berdasarkan id book)
- DELETE localhost:8080/books/:id (untuk menghapus data book)
