function QueryStringToJSON() {            
    var pairs = location.search.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}

var jsonq = QueryStringToJSON();

for(var key in jsonq) {
    var value = jsonq[key];
    if(document.getElementById(key) !== null){
    document.getElementById(key).value=value;
    }
}

