$(() => {

    var model = {
        init: () => {
            if (!localStorage.cats) {
                localStorage.notes = JSON.stringify([]);
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
            return localStorage.cats;
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
        render: () => {
            var htmlStr = '';
            console.log(octopus.getCats());
            Object.keys(octopus.getCats().forEach(cat => {
                htmlStr += '<li class="catList" >' + cat.name + '</li>';
                this.catList.html( htmlStr ); 
            }));

        }
    };

    octopus.init();

});