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
            console.log(model.activeCat)
            //catListView.init();
            catView.init();
        },
        getCats: () => {
            return model.getAllCats();
        },
        getActiveCat: () => {
            return model.activeCat;
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
            console.log(theCat);
            // this.catName.innerHTML = theCat.name;
            // this.catImg.src = theCat.img;
            // this.catCounter.innerHTML = theCat.counter;
            this.catName.textContent = theCat.name;
            this.catImg.src = theCat.img;
            this.catCounter.textContent = theCat.clicks;
        }
    };


    octopus.init();

});