## Đồng bộ thư điện tử

Để kiểm tra hộp thư, bạn có thể sử dụng giao diện của OpenPaaS hoặc một ứng dụng quản lý thư điện tử khác. Các hướng dẫn dưới đây giúp bạn biết cách đồng bộ tài khoản của bạn đến một ứng dụng quản lý thư điện tử bằng giao thức IMAP. Quá trình đồng bộ này sẽ cho phép bạn có thể đọc những thư điện tử đã nhận được, kể cả khi không có kết nối mạng.

### Thiết lập thư điện tử mới

> Lưu ý: Những bước dưới đây có thể khác đối với dòng điện thoại khác nhau

1.  Vuốt từ trên màn hình xuống để hiện ra các tùy chọn và chọn vào mục **Cài đặt** bằng cách chọn vào biểu tượng hình bánh răng.

	![go to Settings](/account/images/en/android_settings_icon.png)

2. Tùy vào dòng điện thoại, tìm mục `Tài khoản & đồng bộ` hoặc `Tài khoản`

	![go to Accounts](/account/images/en/android_settings_accounts.png)

3. Chọn `Thêm tài khoản`.

	![go to Accounts](/account/images/en/android_add_account.png)

4. Trang mới hiện ra một danh sách các hình thức kết nối tài khoản tới điện thoại. Chọn `Cá nhân (IMAP)`.

	![go to Personal IMAP](/account/images/en/android_add_imap_account.png)

5. Nhập tài khoản hộp thư *OpenPaaS* : `<%= user.preferredEmail %>`

	![add your email address](/account/images/en/android_add_imap_account_1.png)

6. Chọn `Thiết lập thủ công` (*Dòng này có thể bị ẩn bởi bàn phím, hãy tắt bàn phím để thấy dòng này*).
	* Trong phần chọn loại tài khoản. Chọn `Cá nhân (IMAP)`

		![select IMAP](/account/images/en/android_add_imap_account_2.png)
	
	* Nhập mật khẩu tài khoản *OpenPaaS*

		![input password](/account/images/en/android_add_imap_account_3_password.png)

	* Thiết lập **Cài đặt máy chủ thư đến** như sau:
        * __Tên người dùng__: `<%= user.preferredEmail %>`
        * __Mật khẩu__: Mật khẩu *OpenPaaS* 
        * __Máy chủ__: `<%= config.accounts[0].imap.hostName %>`
        * __Cổng__: `<%= config.accounts[0].imap.port %>`
        * __Loại bảo mật__: STARTTLS

		![incoming server](/account/images/en/android_add_imap_account_4_incoming.png)

	* Chọn `Tiếp theo`.
	* Thiết lập **Cài đặt máy chủ đi** như sau:
        * __Yêu cầu đăng nhập__: *Checked*
        * __Tên đăng nhập__: `<%= config.accounts[0].smtp.hostname %>`
        * __Máy chủ__: set to `<%= config.accounts[0].smtp.hostname %>`
        * __Cổng__: `<%= config.accounts[0].smtp.port %>`
        * __Loại bảo mật__: STARTTLS

		![outgoing server](/account/images/en/android_add_imap_account_5_outgoing.png)

	* Chọn `Tiếp theo`.
	* Thiết lập cài đặt đồng bộ của bạn.
    * Đặt tên hiển thị dùng để sử dụng khi gửi tin nhắn, chọn `Tiếp theo`.

	![outgoing server](/account/images/en/android_add_imap_account_6.png)

7. **Tài khoản của bạn đã được thiết lập**! Bạn có thể truy cập vào hộp thư sử dụng bất kỳ ứng dụng quản lý hộp thư mà bạn muốn.

## Đồng bộ Danh bạ và Lịch

### Điều kiện cài đặt

Mặc định ban đầu, các thiết bị Android không hỗ trợ giao thức kết nối CalDAV và CardDAV. Do đó, thiết bị không thể hiển thị lịch như mong muốn. Để  có thể truy cập được các sự kiện và danh bạ trong điện thoại mà không có trình duyệt web, bạn sẽ cần cài đặt `DAVdroid` - một ứng dụng quản lý việc đồng bộ này.

> Lưu ý: Để cài đặt `DAVdroid` yêu cầu tối thiểu `Android 4.4`.

1. Mặc định, hệ điều hành Android sẽ chỉ cho phép cài đặt những ứng dụng từ kho ứng dụng của Google. Để cài đặt DAVdroid, bạn cần cho phép điện thoại cài đặt ứng dụng từ `nguồn không xác định`. Tìm mục `Bảo mật` hoặc `Riêng tư` tùy vào dòng điện thoại để kích hoạt tính năng này.

	![enable unknown sources](/account/images/en/android_davdroid_unknown_src.png)

2. Tải ứng dụng: [DAVdroid apk](/account/downloads/davdroid/at.bitfire.davdroid_245.apk).
3. Mở ứng dụng `Tải xuống` mặc định trong máy, hoặc trong một ứng dụng quản lý thư mục bạn có.
4. Chọn thư mục *Tải xuống*.
5. Tìm và mở mục đã tải gần nhất.
6. Chọn `Cài đặt`.

	![install DAVdroid](/account/images/en/android_davdroid_installed.png)

7. Chọn `Mở`.
8. Đi tới màn hình trang chính bằng việc bỏ qua các cảnh báo.
9. Khi bạn đã cài đặt xong DAVdroid, tìm lại mục `Bảo mật` hoặc `Riêng tư` để tắt tính năng cho phép cài đặt ứng dụng từ `nguồn không xác định` với mục đích bảo mật cho điện thoại.

	![enable unknown sources](/account/images/en/android_davdroid_unknown_src.png)

### Tùy chỉnh đồng bộ lịch và danh bạ

1. Khi mở DAVdroid, chọn nút `+` .

    ![empty DAVdroid](/account/images/en/android_davdroid_empty.png)
h
2. Đặt địa chỉ email `<%= user.preferredEmail %>` và mật khẩu tên miền.

    ![DAV domain credentials](/account/images/en/android_davdroid_add_account.png)

3. Chọn `Login`.
4. Chọn `Create Account` và lựa chọn thêm tài khoản như hình.

    ![DAV yellow button](/account/images/en/android_davdroid_accounts_list.png)

5. DAVdroid sẽ yêu cầu thêm một số quyền truy cập, đặc biệt là quyền truy cập vào lịch và danh bạ, hãy cấp quyền cho DAVdroid.
6. Để kích hoạt đồng bộ, hãy chọn CardDAV và CalDAV.

    ![DAV enable automated sync](/account/images/en/android_davdroid_enable_autosync.png)

7. Bạn có thể chọn *biểu tượng bánh răng* để điểu chỉnh cài đặt đồng bộ nếu muốn.


