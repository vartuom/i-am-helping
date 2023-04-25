
export const enum EPageTitleFilterKind {
    Active = 'Активные заявки',
    Map = 'Карта заявок',
    Completed = 'Завершенные заявки',
    Acceptation = 'Подтверждение / Блокировка',
    Statistics = 'Статистика',
    CreateEdit = 'Создание / Редактирование заявки',
}
export type TPageTitleFilter = {
    item: EPageTitleFilterKind
}