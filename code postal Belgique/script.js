document.querySelector('#search').addEventListener('input', function(){
    if (this.value.length != 0) {
        let url = `https://www.odwb.be/api/records/1.0/search/?dataset=code-postaux-belge&q=${this.value}&rows=1&lang=fr`;

                fetch(url).then((response) => 
                response.json().then((data) => {
                     console.log(data);
                     document.getElementById('ville').innerHTML = data["records"]["0"]["fields"]["column_1"];
                    })
                );
            }
        });