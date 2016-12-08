function download_yaml(url_address) {
    var apps = null;
    $.ajax({
        type: "GET",
        async: false,
        url: url_address,
        dataType: "json",
        success: function(data) {
            apps=data;
        }
    });
    return apps; 
};

function get_yaml(name) {
    var yaml = '';
    switch(name) {
        case 'galaxy': {
            yaml = download_yaml('https://rawgit.com/dfigat/indigo-dc/master/generic-portlet/galaxy-template.json');
            break;
        }
        case 'galaxy-elastic-cluster': {
            yaml = download_yaml('https://rawgit.com/dfigat/indigo-dc/master/generic-portlet/galaxy-elastic-cluster-template.json');
            break;
        }
        case 'lifewatch': {
            yaml = download_yaml('https://rawgit.com/dfigat/indigo-dc/master/generic-portlet/lifewatch-template.json');
            break;
        }
        default: {
            yaml = {"parameters": []};
        }
    }
    return yaml;
}
