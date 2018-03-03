# Liệt kê thư mục từ 1 đường dẫn nhập vào từ Terminal(dùng Đệ quy)

## Các Module sử dụng:
* fs, path(Các module có sẵn trong Node.js)
* Cài thêm modul Color để sử dụng màu trong Nodejs
* cài Caporal.js để có thể nhập tham số từ Terminal
## Phân tích bài toán
* B1:nhập vào 1 đường dẫn các file trong thư mục này sẽ được lưu trong 1 mảng chứa các thư mục và file(thư mục gốc)
* B2:Tiến hành đọc tuần tự các file trong thư mục nếu phần tử thứ i trong mảng là file hoặc thư mục thì in ra tên file hoặc thư mục đó, đồng thời kiểm tra xem hiện tại đó có phải là thư mục không nếu là thư mục thì Gọi đệ quy quay lại B1 (với tham số là đường dẫn mới),
* B3: Bài toán kết thúc khi lặp hết mảng 
## Code xử lý chính
``` javascript
    let tem = '   '
let count_folder = 0;
let count_file = 0;
let tree = (dir) => {
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        let name = dir + '/' + files[i];
             if (fs.statSync(name).isDirectory()) {
            if (i === files.length - 1) {
                tem += '    '
            } else {
                tem += '│   '
            }
            tree(name)
            tem = tem.substr(0, tem.length - 4)
        }
    }
```
## Giải thích
* Khi gặp 1 thư mục thì kiểm tra xem đó có phải là thư mục cuối cùng của mảng (chứa các file và thư mục) nếu là thư mục cuối cùng thì sẽ tăng biến tem+='____' nếu không là thư mục cuối cùng thì biến tem+='|___';
``` javascript
        if (fs.statSync(name).isDirectory()) {
            if (i === files.length - 1) {
                tem += '    '
            } else {
                tem += '│   '
            }

```
* gọi lại tree(name) và đồng thời cắt chuỗi tem bớt 4 dấu cách vì mỗi 1 lần gọi đệ quy thì biến tem sẽ tăng lên do đó để trong cùng 1 thư mục thì các file và folder phải cùng cấp nhau:
``` javascript
            tree(name)
            tem = tem.substr(0, tem.length - 4)
```

## Cách chạy chương trình 
* git clone  https://github.com/manhlinhhumg1985/Directory_tree
* cd Directory_tree
* chạy: node caporal_tree.js Tree <tên đường dẫn nhập từ terminal>
* Cài các thư viện cần thiết
## Kết quả 
``` javascript
    thanhhuyen-K84L ~/Desktop/caporal-ptb2 $ node caporal_tree.js Tree ../aa
   ├── Promise ES2015(ES6) giải thích qua ví dụ đơn giản-1j-kmbhDAr4.mp4
   ├── folder
   │   ├── Untitled Document
   │   ├── folder
   │   │   ├── Untitled Document
   │   │   └── folder
   │   │       └── folder1111
   │   └── folder2
   │       ├── Untitled Document
   │       └── folder22
   ├── folder2
   │   ├── Untitled Document
   │   ├── folder22
   │   │   └── folder2222
   │   └── folder222
   │       ├── Untitled Document
   │       └── folder222222
   └── folder3
       ├── Untitled Document
       ├── folder
       ├── folder1
       └── folder3
           ├── Untitled Document
           ├── folder
           │   └── Untitled Document
           └── folder1
---------------------------------------------
17 directories , 9 files

```




























