let initialState = {
    orders:[ {
        id:0,
        Length: '10',
        Width: '10',
        Height: '10',
        CityA: 'Москва',
        StreetA: 'Ленинский пр-т',
        BuildingA: '123',
        CityB: 'Москва',
        StreetB: 'Мичуринский пр-т',
        BuildingB: '49а',
        Courier: 'Иванов И.И.',
        Status: 'Доставляется',
        Cost: '1990 руб',
        Phone: '+71111111',
        Comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum ligula ac tempor fermentum. Donec vel metus ultricies massa eleifend aliquam ut quis dui. Sed sodales ultricies velit, in rhoncus turpis ultrices ut. Proin nulla leo, molestie ut velit vel, malesuada vestibulum orci. Praesent egestas, nisi non porta gravida, ante erat porta nisl, et iaculis sapien nunc sed ligula. Etiam laoreet euismod eros eu ultrices. Vivamus feugiat leo non libero tincidunt facilisis. Etiam posuere vel tortor vel consectetur. '
    }, {
        id:1,
        Length: '20',
        Width: '20',
        Height: '20',
        CityA: 'Мурманск',
        StreetA: 'Ленина',
        BuildingA: '14',
        CityB: 'Архангельск',
        StreetB: 'Победы',
        BuildingB: '55',
        Courier: 'Петров П.П,',
        Status: 'Курьер скоро будет',
        Cost: '3000 руб',
        Phone: '+72222222',
        Comments: 'Praesent at porta nibh. Quisque vehicula tempus sem maximus dignissim. Nulla laoreet, ipsum eu tempor auctor, mauris nunc rhoncus tellus, nec dignissim ante tellus in nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum volutpat erat at mattis. Suspendisse ipsum sem, consectetur quis lobortis eget, varius quis purus. Aliquam erat volutpat. Proin fringilla luctus maximus. '
    }, {
        id:2,
        Length: '30',
        Width: '30',
        Height: '30',
        CityA: 'С.-Петербург',
        StreetA: 'Энгельса',
        BuildingA: '55',
        CityB: 'С.-Петербург',
        StreetB: '8 марта',
        BuildingB: '111',
        Courier: 'ещё неизвестен',
        Status: 'Заказ в обработке',
        Cost: '900 руб',
        Phone: '+73333333',
        Comments:'Phasellus velit massa, eleifend ac ligula non, lacinia accumsan purus. Fusce id ornare dui. Donec vehicula justo a metus consequat, sit amet sollicitudin arcu dictum. Ut egestas tempor tellus id luctus. Sed eu pulvinar lorem, non mollis nisi. Sed id semper massa. Praesent sit amet dapibus est. Praesent elit libero, maximus eget eros et, viverra luctus nibh. Quisque euismod sed dolor quis dapibus. Phasellus finibus diam quis augue pellentesque consequat. '
    },]
}
;

export const ordersReducer = (state = initialState, action) => {
    return state;

};