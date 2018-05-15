$(() => {

    var model = {
        init: () => {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([]);
                localStorage.cats = [
                    { name: 'Scrappy', clicks: 0, img: 'img/cat.jpg' },
                    { name: 'Mr Mistoffelees', clicks: 0, img: 'img/cat2.jpg' },
                    { name: 'Garfield', clicks: 0, img: 'img/cat3.jpg' },
                    { name: 'Felix', clicks: 0, img: 'img/cat4.jpg' },
                    { name: 'Sylvestor', clicks: 0, img: 'img/cat5.jpg' },
                ];
            }
        },
        getAllCats: () => {
            return JSON.parse(localStorage.cats);
        }
    };

    var octopus = {
        init: () => {
            model.init();
            view.init();
        },
        getCats: () => {
            return model.getAllCats();
        },
    };

    var view = {
        init: () => {
            this.catList = $('#catList');
            view.render();
        },
        showCat: function(z)  {
            console.log(z);
            let x = z;
            var name = $('#catName');
            var img = $('#catPic');
            var counter = $('#counter');
            var cats = octopus.getCats();
            counter.innerHTML = cats[x].clicks;
            name.innerHTML = cats[x].name;
            img.src = cats[x].img;
            //activeCat = x;
        },
        render: () => {
            var htmlStr = '';
            octopus.getCats().forEach(cat => {
                htmlStr += '<li class="catList-item" >' + cat.name + '</li>';
                this.catList.html( htmlStr ); 
            });
            var c = $('.catList-item');
            console.log('c: ' + c.length);
            for ( var g = 0; g <= c.length-1; g++) {
                let b = g;
                c[g].addEventListener('click', function () { 
                    view.showCat(b);
                }, false);
            }

        }
    };

    octopus.init();

});