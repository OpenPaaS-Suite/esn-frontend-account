## Đồng bộ Hộp thư điện tử

Để kiểm tra hộp thư, bạn có thể sử dụng giao diện OpenPaaS hoặc một phần mềm quản lý hộp thư. Hướng dẫn dưới đây giúp bạn học cách đồng bộ tài khoản thư điện tử của bạn đến **Outlook 2016**, một phần mềm quản lý thư điện tử của Microsoft. Quá trình đồng bộ sẽ cho phép bạn có thể đọc thư đã nhận kể  cả khi không có kết nối mạng.

*Khi bạn làm theo các hướng dẫn dưới đây có thể hoạt động được ở phiên bản cũ hơn 2016, nhưng hãy nhớ rằng chúng tôi chỉ hỗ trợ từ Outlook 2016 trở đi.*

### Thiết lập một tài khoản thư điện tử

1. Đầu tiên, bạn cần mở Outlook 2016, nháy đúp và biểu tượng như hình.

    ![The outlook icon](/account/images/en/windows_home_outlook.png)

2. Ở góc trái, Chọn `File`.

    ![The *File* tap](/account/images/en/windows_setup_outlook_account_0.png)

3. Chọn `Add Account`.

    ![Add Account](/account/images/en/windows_setup_outlook_account_1.png)

4. Tại cửa sổ  mới hiện ra, nhập tài khoản thư điện tử của bạn và chọn `Connect`.

    ![Email address field](/account/images/en/windows_setup_outlook_account_2.png)

5. Nhập mật khẩu OpenPass và chọn `Connect`.

    ![Password field](/account/images/en/windows_setup_outlook_account_3.png)

6. Đợi cho đến khi có thông baó thành công `Account setup is complete` và click vào `Ok`. Chúc mừng! Bạn đã có thể gửi và nhận email trong Outlook.

    ![Processing your request](/account/images/en/windows_setup_outlook_account_4.png)

    ![Your account setup is now complete!](/account/images/en/windows_setup_outlook_account_5.png)

## Đồng bộ lịch

Để thấy lịch và các sự kiện, bạn có thể sử dụng giao diện website OpenPaaS hoặc bất kỳ ứng dụng lịch tương thích với giao thức CalDAV. Rất tiếc là Outlook không tương thích với CalDAV. Để sử dụng được Outlook để theo dõi và sửa lịch của bạn, hãy cài đặt Add-on `Outlook CalDav Synchronizer`. Một khi cài đặt xong, bạn sẽ có thể  đồng bộ được lịch trên nền tảng OpenPaaS với Outlook.

*Để cài đặt add-on này, hãy bật quyền admin. Nếu bạn không biết liệu bạn đã bật hay chưa, hãy hỏi bộ phận hỗ trợ IT của bạn.

### Yêu cầu trước khi cài đặt: Outlook CalDav Synchronizer

1. Đầu tiên, mở bất kỳ trình duyệt web Firefox, Chrome, hoặc Internet Explorer.

    ![Firefox shortcut](/account/images/en/windows_firefox_shortcut.png)

2. Trong thanh địa chỉ, chép lại hoặc copy & paste địa chỉ sau, nhấn *Enter*: `https://caldavsynchronizer.org/`.

    ![URL address](/account/images/en/windows_install_caldavsynchronizer_2.png)

3. Tìm mục `Download` ở phía trên, kích chuột vào hình chữ nhật màu xanh có chữ `Download [...]`, một cửa sổ windown sẽ hiện ra.

    ![Download section](/account/images/en/windows_install_caldavsynchronizer_3.png)

4. Chọn `Ok`.

    ![File explorer](/account/images/en/windows_install_caldavsynchronizer_4.png)

5.  Khi tải xong `CalDavSynchronizer.Setup.msi`, một thông báo cài đặt hiện ra.

    ![File explorer](/account/images/en/windows_install_caldavsynchronizer_5.png)

5. Chọn `Next` và `Next`.

    ![Installer: first step](/account/images/en/windows_install_caldavsynchronizer_6.png)

    ![Installer: second step](/account/images/en/windows_install_caldavsynchronizer_7.png)

7. Một cử a sổ mới hiện ra với câu hỏi: `Do you want to allow this to make changes to your device?`. Chọn `Yes`.

    ![Changes to your device](/account/images/en/windows_install_caldavsynchronizer_8.png)

8. Một khi quá trình cài đặt hoàn tất, chọn `Close`. Chúc mừng!!! Cal Dav Synchronizer đã cài đặt thành công.

    ![Done with the installation](/account/images/en/windows_install_caldavsynchronizer_9.png)

### Thiết lập một tài khoản lịch với CalDav Synchronizer

Cal Dav Synchronizer đã được cài đặt. Bạn đã có thể liên kết lịch trên OpenPaaS với Outlook.

1. Đầu tiên, nháy đúp vào biểu tượng Outlook 2016.

    ![The outlook icon](/account/images/en/windows_home_outlook.png)

2. Đi đến tab `CalDav Synchronizer`. Các tùy chọn sẽ xuất hiện, chọn `Sychronization Profiles`.

    ![Outlook CalDav](/account/images/en/windows_setup_caldavsynchronizer_1.png)

3. Chọn biểu tượng **dấu cộng** . Trong cửa sổ mới, rời khỏi thiết lập mặc định và nhấn `OK`.

4. Chọn tên cho profile của bạn, chọn cái tên phù hợp với tên của Lịch mà bạn muốn đồng bộ với Outlook. Ở hình dưới, tên được chọn là `My OpenPaaS main calendar`. Dưới `Outlook Settings`, ở cuối `Outlook folder`, Chọn **...**. Chọn `New...`. Một cử a sổ nhỏ sẽ xuất hiện. Dưới mục `Folder contains`, chọn `Calendar Items`. Chọn folder bạn muốn lưu lịch, và nhấn `Ok`.
*Mục `Synchronize items imediately after change` có thể được chọn.*

    ![How to sync](/account/images/en/windows_setup_caldavsynchronizer_2.png)

5. Dưới phần `Server Settings` , điền vào `DAV URL`. Nên trùng với tên domain và gõ thêm `/sdav/`.
        * - **DAV URL**: `<%= user.preferredEmail %>`/sdav/
        * - **Username**: `<%= user.preferredEmail %>`
        * - **Password**: Mật khẩu *OpenPaaS*
        * - **Email address**: `<%= user.preferredEmail %>`
        * Một khi hoàn thành, chọn `OK` ở phía dưới góc phải của cử a sổ .

    ![Done with your settings](/account/images/en/windows_setup_caldavsynchronizer_3.png)

6. Một cửa sổ sẽ mở ra để bạn chọn nơi mà lịch Outlook sẽ được đồng bộ. Chọn mẫu lịch và ấn `OK`. Tại cửa sổ khác, tiếp tục chọn `OK`.

    ![The calendar to sync](/account/images/en/windows_setup_caldavsynchronizer_4.png)

7. Xong, Outlook giờ đã đồng bộ với lịch OpenPaaS! Bạn đã có thể sử dụng lịch của bạn thông qua chức năng lịch trên Outlook.

    ![Calendar in Outlook](/account/images/en/windows_setup_caldavsynchronizer_5.png)
