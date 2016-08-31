var fileMetadataMicroservice = (function () {

    var file = null;
    var clientOrigin = window.location.origin;

    const upload = {

        chooseFileButtonHandler: function() {

            $('#choose-file-btn').on('change', function(event) {
                file = event.target.files;
                console.log(file[0].name);
                upload.updateFileName();
            });

        },

        updateFileName: function(reset) {
            var initialText = "Your filename will show up here...";
            var filename = getFileName(file);

            if (reset) {
                $('.filename')
                    .empty()
                    .append(initialText);
            } else {
                $('.filename')
                    .empty()
                    .append(filename);
            }

        },

        uploadButtonHandler: function() {

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

})();

$(document).ready(function() {
    fileMetadataMicroservice.init();
});
