'use strict';

var fileMetadataMicroservice = function () {

    var file = null;
    var clientOrigin = window.location.origin;

    var upload = {

        chooseFileButtonHandler: function chooseFileButtonHandler() {

            $('#choose-file-btn').on('change', function (event) {
                file = event.target.files;
                console.log(file[0].name);
                upload.updateFileName();
            });
        },

        updateFileName: function updateFileName(reset) {
            var initialText = "Your filename will show up here...";
            var filename = getFileName(file);

            if (reset) {
                $('.filename').empty().append(initialText);
            } else {
                $('.filename').empty().append(filename);
            }
        },

        uploadButtonHandler: function uploadButtonHandler() {

            var postURL = clientOrigin + "/upload";

            $('#upload-btn').on('click', function () {
                console.log('upload-btn clicked! size: ', file[0].size);
                $.ajax({
                    type: "POST",
                    url: postURL,
                    data: file[0].size,
                    success: success,
                    dataType: "text"
                });
            });

            function success(data) {
                console.log(data);
                file = null;
                upload.updateFileName(true);
            }
        }
    };

    function getFileName(file) {

        if (file === null) {
            return;
        }

        return file[0].name;
    }

    function init() {
        upload.chooseFileButtonHandler();
        upload.uploadButtonHandler();
    }

    return {
        init: init
    };
}();

$(document).ready(function () {
    fileMetadataMicroservice.init();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJmaWxlTWV0YWRhdGFNaWNyb3NlcnZpY2UiLCJmaWxlIiwiY2xpZW50T3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1cGxvYWQiLCJjaG9vc2VGaWxlQnV0dG9uSGFuZGxlciIsIiQiLCJvbiIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInVwZGF0ZUZpbGVOYW1lIiwicmVzZXQiLCJpbml0aWFsVGV4dCIsImZpbGVuYW1lIiwiZ2V0RmlsZU5hbWUiLCJlbXB0eSIsImFwcGVuZCIsInVwbG9hZEJ1dHRvbkhhbmRsZXIiLCJwb3N0VVJMIiwic2l6ZSIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJkYXRhVHlwZSIsImluaXQiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLDJCQUE0QixZQUFZOztBQUV4QyxRQUFJQyxPQUFPLElBQVg7QUFDQSxRQUFJQyxlQUFlQyxPQUFPQyxRQUFQLENBQWdCQyxNQUFuQzs7QUFFQSxRQUFNQyxTQUFTOztBQUVYQyxpQ0FBeUIsbUNBQVc7O0FBRWhDQyxjQUFFLGtCQUFGLEVBQXNCQyxFQUF0QixDQUF5QixRQUF6QixFQUFtQyxVQUFTQyxLQUFULEVBQWdCO0FBQy9DVCx1QkFBT1MsTUFBTUMsTUFBTixDQUFhQyxLQUFwQjtBQUNBQyx3QkFBUUMsR0FBUixDQUFZYixLQUFLLENBQUwsRUFBUWMsSUFBcEI7QUFDQVQsdUJBQU9VLGNBQVA7QUFDSCxhQUpEO0FBTUgsU0FWVTs7QUFZWEEsd0JBQWdCLHdCQUFTQyxLQUFULEVBQWdCO0FBQzVCLGdCQUFJQyxjQUFjLG9DQUFsQjtBQUNBLGdCQUFJQyxXQUFXQyxZQUFZbkIsSUFBWixDQUFmOztBQUVBLGdCQUFJZ0IsS0FBSixFQUFXO0FBQ1BULGtCQUFFLFdBQUYsRUFDS2EsS0FETCxHQUVLQyxNQUZMLENBRVlKLFdBRlo7QUFHSCxhQUpELE1BSU87QUFDSFYsa0JBQUUsV0FBRixFQUNLYSxLQURMLEdBRUtDLE1BRkwsQ0FFWUgsUUFGWjtBQUdIO0FBRUosU0ExQlU7O0FBNEJYSSw2QkFBcUIsK0JBQVc7O0FBRTVCLGdCQUFJQyxVQUFVdEIsZUFBZSxTQUE3Qjs7QUFFQU0sY0FBRSxhQUFGLEVBQWlCQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFZO0FBQ3JDSSx3QkFBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDYixLQUFLLENBQUwsRUFBUXdCLElBQWxEO0FBQ0FqQixrQkFBRWtCLElBQUYsQ0FBTztBQUNIQywwQkFBTSxNQURIO0FBRUhDLHlCQUFLSixPQUZGO0FBR0hLLDBCQUFNNUIsS0FBSyxDQUFMLEVBQVF3QixJQUhYO0FBSUhLLDZCQUFTQSxPQUpOO0FBS0hDLDhCQUFVO0FBTFAsaUJBQVA7QUFPSCxhQVREOztBQVdBLHFCQUFTRCxPQUFULENBQWlCRCxJQUFqQixFQUF1QjtBQUNuQmhCLHdCQUFRQyxHQUFSLENBQVllLElBQVo7QUFDQTVCLHVCQUFPLElBQVA7QUFDQUssdUJBQU9VLGNBQVAsQ0FBc0IsSUFBdEI7QUFDSDtBQUNKO0FBaERVLEtBQWY7O0FBbURBLGFBQVNJLFdBQVQsQ0FBcUJuQixJQUFyQixFQUEyQjs7QUFFdkIsWUFBSUEsU0FBUyxJQUFiLEVBQW1CO0FBQ2Y7QUFDSDs7QUFFRCxlQUFPQSxLQUFLLENBQUwsRUFBUWMsSUFBZjtBQUNIOztBQUVELGFBQVNpQixJQUFULEdBQWdCO0FBQ1oxQixlQUFPQyx1QkFBUDtBQUNBRCxlQUFPaUIsbUJBQVA7QUFDSDs7QUFFRCxXQUFPO0FBQ0hTLGNBQU1BO0FBREgsS0FBUDtBQUlILENBMUU4QixFQUEvQjs7QUE0RUF4QixFQUFFeUIsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJsQyw2QkFBeUJnQyxJQUF6QjtBQUNILENBRkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZpbGVNZXRhZGF0YU1pY3Jvc2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZmlsZSA9IG51bGw7XG4gICAgdmFyIGNsaWVudE9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG5cbiAgICBjb25zdCB1cGxvYWQgPSB7XG5cbiAgICAgICAgY2hvb3NlRmlsZUJ1dHRvbkhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAkKCcjY2hvb3NlLWZpbGUtYnRuJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlWzBdLm5hbWUpO1xuICAgICAgICAgICAgICAgIHVwbG9hZC51cGRhdGVGaWxlTmFtZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVGaWxlTmFtZTogZnVuY3Rpb24ocmVzZXQpIHtcbiAgICAgICAgICAgIHZhciBpbml0aWFsVGV4dCA9IFwiWW91ciBmaWxlbmFtZSB3aWxsIHNob3cgdXAgaGVyZS4uLlwiO1xuICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gZ2V0RmlsZU5hbWUoZmlsZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgICQoJy5maWxlbmFtZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbXB0eSgpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5pdGlhbFRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuZmlsZW5hbWUnKVxuICAgICAgICAgICAgICAgICAgICAuZW1wdHkoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGZpbGVuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIHVwbG9hZEJ1dHRvbkhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zdFVSTCA9IGNsaWVudE9yaWdpbiArIFwiL3VwbG9hZFwiO1xuXG4gICAgICAgICAgICAkKCcjdXBsb2FkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkLWJ0biBjbGlja2VkISBzaXplOiAnLCBmaWxlWzBdLnNpemUpO1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHBvc3RVUkwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZpbGVbMF0uc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdXBsb2FkLnVwZGF0ZUZpbGVOYW1lKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEZpbGVOYW1lKGZpbGUpIHtcblxuICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbGVbMF0ubmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB1cGxvYWQuY2hvb3NlRmlsZUJ1dHRvbkhhbmRsZXIoKTtcbiAgICAgICAgdXBsb2FkLnVwbG9hZEJ1dHRvbkhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfTtcblxufSkoKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgZmlsZU1ldGFkYXRhTWljcm9zZXJ2aWNlLmluaXQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
