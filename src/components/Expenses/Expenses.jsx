const Expenses = () => (
  <div>
  <div class="expenses-table">
  <div class="expenses-table__header">
    <div class="expenses-table__line expenses-table__line--first">
      <h1 class="expenses-table__title">Таблица расходов</h1>
      <div class="expenses-table__filters">
        <div class="expenses-table__filter">Фильтровать по категории</div>
        <div class="expenses-table__filter">Сортировать по дате</div>
      </div>
    </div>
    <div class="expenses-table__line expenses-table__line--second">
      <div class="expenses-table__column-title">Описание</div>
      <div class="expenses-table__column-title">Категория</div>
      <div class="expenses-table__column-title">Дата</div>
      <div class="expenses-table__column-title">Сумма</div>
    </div>
  </div>
  
  <div class="expenses-table__row">
    <div class="expenses-table__cell expenses-table__cell--description">Пятерочка</div>
    <div class="expenses-table__cell expenses-table__cell--category">Еда</div>
    <div class="expenses-table__cell expenses-table__cell--date">03.07.2024</div>
    <div class="expenses-table__cell expenses-table__cell--money">3500</div>
    <div class="expenses-table__actions">
      <img class="expenses-table__icon" src="/img_edit.svg" alt="Редактировать" />
      <img class="expenses-table__icon" src="/img_del.svg" alt="Удалить" />
    </div>
  </div>
</div>
    {/* <h2 className="text-lg font-semibold mb-2">Список расходов</h2>
    <p>Тут будет список расходов пользователя</p> */}
  </div>
);

export default Expenses;
