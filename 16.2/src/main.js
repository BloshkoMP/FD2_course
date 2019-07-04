function Human() {}
//создается объект 4, Obj4.__proto__ указывает на объект 4, Human.prototype указывает на Obj4
//конструктор объекта 4 указывает на Human

function Woman() {}
//создается объект 7, Obj.__proto__ указывает на объект 5, Woman.prototype указывает на Obj7
//конструктор объекта 7 указывает на Woman

Woman.prototype = Object.create(Human.prototype);
//завязывание прототипов, создается объект 3, obj3.__proto__ ссылается на объект 4, Woman.prototype теперь указывает на объект 3
Woman.prototype.constructor = Woman;
//контсруктор объекта 3 указывает на Woman

function Ann() {}
//создается объект 6, Obj3.__proto__ указывается на объект 5, Ann.prototype указывает на Obj6
//конструктор объекта 6 указывает на Ann
Ann.prototype = Object.create(Woman.prototype);
//завязывание прототипов, создается объект 2, obj2.__proto__ ссылается на объект 3, Woman.prototype теперь указывает на объект 2
Ann.prototype.constructor = Ann;
