const Expenses = () => (
  <div>
  <div className="expenses-table w-[789px] h-[618px] flex-col rounded-[30px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white">
  <div className="expenses-table__header">
    <div className="expenses-table__line expenses-table__line--first flex ml-8">
      <h1 className="expenses-table__title">Таблица расходов</h1>
      <div className="expenses-table__filters flex">
        <div className="expenses-table__filter">Фильтровать по категории</div>
        <div className="expenses-table__filter">Сортировать по дате</div>
      </div>
    </div>
    <div className="expenses-table__line expenses-table__line--second w-[723px] h-[15px] flex justify-start items-center gap-32 text-[#999] ml-8">
      <div className="expenses-table__column-title w-[141px] h-[15px]">Описание</div>
      <div className="expenses-table__column-title w-[141px] h-[15px]">Категория</div>
      <div className="expenses-table__column-title w-[141px] h-[15px]">Дата</div>
      <div className="expenses-table__column-title w-[141px] h-[15px]">Сумма</div>
    </div>
    <div className="line w-[789px] h-0 border-t border-t-gray-400 border-t-[0.5px] mt-[7.5px]"></div>
  </div>
  
  <div className="expenses-table__row flex ml-8">
    <div className="expenses-table__cell expenses-table__cell--description">Пятерочка</div>
    <div className="expenses-table__cell expenses-table__cell--category">Еда</div>
    <div className="expenses-table__cell expenses-table__cell--date">03.07.2024</div>
    <div className="expenses-table__cell expenses-table__cell--money">3500</div>
    <div className="expenses-table__actions flex">
      <img className="expenses-table__icon" src="/img_edit.svg" alt="Редактировать" />
      <img className="expenses-table__icon" src="/img_del.svg" alt="Удалить" />
    </div>
  </div>
</div>
    {/* <h2 classNameNameName="text-lg font-semibold mb-2">Список расходов</h2>
    <p>Тут будет список расходов пользователя</p> */}
  </div>
);

export default Expenses;
