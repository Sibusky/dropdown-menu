# Dropdown-menu

Ссылка на деплой проекта: [https://dropdown-example.netlify.app](https://dropdown-example.netlify.app)

В данном проекте создан Dropdown компонент, который умеет автоматически определять сторону открытия контента и раскрывать его по клику туда, где будет больше места относительно триггера.

Допустимые позиции: 
- вниз-вправо,
- вверх-вправо,
- вниз-влево,
- вверх-влево.

Компонент изменяемый (параметры записываются извне). Клик снаружи или повторный клик в триггер закрывают активный дропдаун. Может быть только один активный дропдаун.  На странице три дропдауна, чтобы можно было проверить все требования: слева, в центре и справа. 

Страница скроллится по вертикали. Если при скролле страницы дропдауну не хватает места для отрисовки, то он перерисоваться в новое место так, чтобы контент отобразился корректно. При выходе инициирующего элемента из вьюпорта дропдаун скрывается, а при появлении отображается снова.

Клик на пункт меню дропдауна вызывает смену цвета блока header, main или footer. После клика меню закрывается. 

Ширина контента дропдауна ограничена 260 пикселями. 
