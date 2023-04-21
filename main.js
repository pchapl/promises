(function () {
    'use strict';

    const load = (name) => fetch(`https://cats.nmsc.pchapl.dev/${name}`).then((res) => res.text());

    const loadA = () => load('a');
    const loadB = () => load('b');
    const loadC = () => load('c');
    const loadD = () => load('d');

    const setTitle = (title) => document.title = title;

    const drawA = (data) => document.getElementsByClassName('container-a')[0].innerHTML = data;
    const drawB = (data) => document.getElementsByClassName('container-b')[0].innerHTML = data;
    const drawC = (data) => document.getElementsByClassName('container-c')[0].innerHTML = data;
    const drawD = (data) => document.getElementsByClassName('container-d')[0].innerHTML = data;

    let reset = () => {
        setTitle('Loading');
        drawA('');
        drawB('');
        drawC('');
        drawD('');
        runTask();
    };
    document.getElementsByClassName('btn-reset')[0].addEventListener('click', reset);

    // Задача: написать код runTask, который будет загружать данные с сервера функциями loadA-loadD) и отрисовывать их
    // на странице функциями drawA-drawD. На время загрузки должен отображаться текст "Loading..."
    // в соответствующем контейнере. После загрузки данных во все контейнеры надо заменить заголовок Loading на "Done"
    function runTask() {
    }
})();
