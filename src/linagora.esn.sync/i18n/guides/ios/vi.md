## Đồng bộ thư điện tử

Để kiểm tra hộp thư, bạn có thể sử dụng giao diện của OpenPaaS hoặc một ứng dụng quản lý thư điện tử khác. Các hướng dẫn dưới đây giúp bạn biết cách đồng bộ tài khoản của bạn đến một ứng dụng quản lý thư điện tử bằng giao thức IMAP. Quá trình đồng bộ này sẽ cho phép bạn có thể đọc những thư điện tử đã nhận được, kể cả khi không có kết nối mạng.

### Thiết lập môt thư điện tử mới

1. Trong màn hình chính, chọn **Cài đặt** bằng cách chọn vào biểu tượng bánh răng

    ![go to Settings](/account/images/en/ios_home_screen.png)

2. Cuộn xuống cho đến mục `Hộp thư`, chọn `Hộp thư`

    ![go to Mail](/account/images/en/ios_add_imap_account_1.png)

3. Tiếp đó chọn `Tài khoản`.

    ![open Accounts](/account/images/en/ios_add_imap_account_2.png)

4. Chọn `Thêm tài khoản`, mục này nằm ở dưới cùng.

    ![Add Account](/account/images/en/ios_add_imap_account_3.png)

5. Chọn `Khác` ở dưới cùng của danh sách.

    ![Add Account](/account/images/en/ios_add_imap_account_4.png)

6. Chọn `Thêm tài khoản mail`.

    ![Add Account](/account/images/en/ios_add_imap_account_5.png)

7. Trong trang `Tài khoản mới`, điền vào những mục về thông tin tài khoản OpenPaaS.
    * - __Tên__: `<%= user.preferredEmail %>`
    * - __Tên người dùng__: `<%= user.preferredEmail %>`
    * - __Mật khẩu__: Mật khẩu *OpenPaaS* 
    * - __Mô tả__: Tài khoản OpenPaaS!

    ![Add Account](/account/images/en/ios_add_imap_account_6.png)

8. Trong trang tiếp theo, làm theo hướng dẫn sau:

  * Thiết lập **Cài đặt máy chủ thư đến** như sau:
      * - __Tên máy chủ__: `<%= config.accounts[0].imap.hostName %>`
      * - __Tên người dùng__: `<%= user.preferredEmail %>`
      * - __Mật khẩu__: Mật khẩu *OpenPaaS* 
  * Thiết lập **Cài đặt máy chủ thư đi** như sau:
      * - __Tên máy chủ__: `<%= config.accounts[0].imap.hostName %>`
      * - __Tên người dùng__: *Optionnal*
      * - __Mật khẩu__: *Optionnal*
  * Khi hoàn thành, Chọn `Tiếp theo`.

    ![Add Account](/account/images/en/ios_add_imap_account_7.png)

9. Khi xuất hiện thông báo `Không thể kết nối bằng SSL`, chọn `Đồng ý`

    ![Add Account](/account/images/en/ios_add_imap_account_8.png)

10. Trong màn hình `IMAP`, nhấn nút `Lưu`. **Tài khoản của bạn đã được thiết lập!** bạn bây giờ có thể truy cập vào hộp thư sử dụng ứng dụng quản lý hộp thư ưa thích.

## Đồng bộ Lịch

Để thấy được lịch và các sự kiện, bạn có thể sử dụng giao diện của OpenPaaS hoặc ứng dụng mặc định trong thiết bị iOS. Theo hướng dẫn dưới bạn sẽ biết cách đồng bộ thiết bị iOS với OpenPaaS. Đặc biệt sẽ cho phép bạn đọc thư đã nhận được, kể cả khi bạn không có kết nối mạng.

### Thiết lập một tài khoản lịch mới

1. Trong trang chính, chọn **Cài đặt** bằng cách chọn vào biểu tượng hình bánh răng.

    ![go to Settings](/account/images/en/ios_home_screen.png)

2. Cuộn xuống và chọn mục `Lịch`.

    ![go to Calendar](/account/images/en/ios_caldav_account_1.png)

3. Sau đó, bạn chọn `Tài khoản`.

    ![open Accounts](/account/images/en/ios_caldav_account_2.png)

4. Chọn `Thêm tài khoản`, là mục cuối cùng trong danh sách.

    ![Add Account](/account/images/en/ios_caldav_add_account_1.png)

5. Chọn `Khác` ở dưới cùng.

    ![Other Account](/account/images/en/ios_caldav_add_account_2.png)

6. Chọn `Cài đặt tài khoản CalDAV`.

    ![CalDAV Account](/account/images/en/ios_caldav_add_account_3.png)

7. Trong trang `CalDAV`, điền vào các mục trống về thông tin tài khoản OpenPaaS, và chọn `Lưu`.

    ![CalDAV config](/account/images/en/ios_caldav_add_account_4.png)

    * Sử dụng thiết lập cài đặt **CalDAV** như sau:
        * - __Máy chủ__: `<%= config.accounts[0].imap.hostName %>`
        * - __Tên người dùng__: `<%= user.preferredEmail %>`
        * - __Mật khẩu__: Mật khẩu *OpenPaaS*
        * - __Mô tả__: *Optionnal*

8. Cuối cùng, Chọn `Lưu`. Quá trình đồng bộ bây giờ đã hoàn tất.

    ![CalDAV config](/account/images/en/ios_caldav_add_account_5.png)
