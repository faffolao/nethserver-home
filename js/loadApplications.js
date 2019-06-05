var arrayApps = new Array();

$(document).ready(function(){
    $.ajax({
        url: 'applications.json',
        method: 'POST',
        data: "load",
        dataType: 'JSON',
        success: function(data){
            arrayApps = data;
            draw(arrayApps);
        }
    });
});

function draw(ar){
    var tmp = '';

    for(i=0;i<ar.length;i++){
        if(ar[i].pinned == 1 && ar[i].legacy == 0){
            tmp += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">';
            tmp += '<div class="card-pf card-pf-view card-pf-view-select">';
            tmp += '<div class="card-pf-body text-center">';
            tmp += '<div class="card-pf-top-element"></div>';
            tmp += '<img src="' + ar[i].icon_base64 + '" width="90"></img>';
            tmp += '</div><h2 class="card-pf-title text-center">' + ar[i].name + '</h2>';
            tmp += '<p class="card-pf-info text-center">' + ar[i].description + '<br><em>Version ' + ar[i].release.version + '</em></p>';
            tmp += '<div class="card-pf-items text-center"><div class="card-pf-item"><a href="' + ar[i].url + '">Launch</a></div></div>';
            tmp += '</div></div></div>';
        }
    }

    $("#apps").html(tmp);
}

function openCockpit(){
    window.open("http://" + window.location.hostname + ":9090");
}