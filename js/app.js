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
        },
        activeCat: null,
    };

    var octopus = {
        init: () => {
            model.init();
            model.activeCat = model.getAllCats()[1];
            catView.init();
            catListView.init();

        },
        getCats: () => {
            return model.getAllCats();
        },
        getActiveCat: () => {
            return model.activeCat;
        },
        setActiveCat: function(cat) {
            model.activeCat = cat;

        }

    };

    var catView = {
        init: function() {

            // this.catName = $('#catName');
            // this.catImg = $('#catPic');
            // this.catCounter = $('#counter');
            this.catElement = document.getElementById('catView');
            this.catName = document.getElementById('catName');
            this.catImg = document.getElementById('catPic');
            this.catCounter = document.getElementById('catCounter');

            this.render();
        },
        render: function() {
            var theCat = octopus.getActiveCat();
            // this.catName.innerHTML = theCat.name;
            // this.catImg.src = theCat.img;
            // this.catCounter.innerHTML = theCat.counter;
            this.catName.textContent = theCat.name;
            this.catImg.src = theCat.img;
            this.catCounter.textContent = theCat.clicks;
        }
    };

    var catListView = {
        init: function() {
            this.catList = document.getElementById('catList');
            this.render();
        },
        render: function() {

            var cat, elem, i;

            var cats = octopus.getCats();

            this.catList.innerHTML = '';

/*             var htmlStr = '';
            octopus.getCats().forEach(cat => {
                htmlStr += '<li class="catList-item" >' + cat.name + '</li>';
                this.catList.innerHtml = htmlStr;
            }); */

            for (i = 0; i <= cats.length - 1 ; ++i ) {

                cat = cats[i];

                elem = document.createElement('li');
                elem.className = 'catList-item';
                elem.textContent = cat.name;


                elem.addEventListener('click', (function(catCopy) {  
                    return function() {
                        octopus.setActiveCat(catCopy);
                        catView.render();
                    };
                })(cat));


                this.catList.appendChild(elem);
            }
            
            // var c = $('.catList-item');
            // console.log('c: ' + c.length);
            // for ( var g = 0; g <= c.length-1; g++) {
            //     let b = g;
            //     c[g].addEventListener('click', function () { 
            //         model.activeCat = octopus.getCats()[3];
            //         catView.render();
            //     }, false);
            // }
        }
    };

    octopus.init();

});