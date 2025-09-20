const Expenses = () => (
  <div>
  <div className="w-[789px] h-[618px] flex-col rounded-[30px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white mt-[116px]">
  <div className="expenses-table__header">
    <div className="flex items-baseline justify-between ml-[32px]">
      <h2 className="font-montserrat text-2xl font-bold leading-[29px] tracking-normal text-center mt-[32px] mb-[32px]">Таблица расходов</h2>
      <div className="flex items-center">
        <div className="text-[12px] font-normal leading-[150%] tracking-normal ml-[130px]">Фильтровать по категории</div>
        <img className="h-[7px] w-[7px] ml-[8px]" src="/polygon 3.svg" alt="" />
        <div className="text-[12px] font-normal leading-[150%] tracking-normal ml-[24px]">Сортировать по</div>
        <div className="text-[12px] ml-[4px]">дате</div>
        <img className="h-[7px] w-[7px] ml-[8px] mr-[34px]" src="/polygon 3.svg" alt="" />
      </div>
    </div>
    <div className="font-montserrat font-normal leading-[150%] tracking-[0px] w-[723px] h-[15px] flex justify-start items-center text-[#999] ml-[32px] pr-[69px]">
      <div className="text-[12px] w-[141px] h-[15px]">Описание</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Категория</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Дата</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Сумма</div>
    </div>
    <div className="line w-[789px] h-0 border-t border-t-gray-400 border-t-[0.5px] mt-[5.75px] "></div>
  </div>
  <div className="w-[723px] h-[479px] flex flex-col justify-start items-start gap-[14px] pt-[18.25px]">
    <div className="font-normal leading-[150%] tracking-[0px] w-[723px] h-[15px] flex justify-start items-center ml-[32px]">
      <div className="text-[12px] w-[141px] h-[15px]">Пятерочка</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Еда</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">03.07.2024</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">3 500р</div>
      <div className="flex w-[36px] h-[12px] ml-[32px]">
        <img className="w-[12px] h-[12px] mr-[12px]" src="/img_edit.svg" alt="Редактировать" />
        <img className="w-[12px] h-[12px] mr-[1px]" src="/img_del.svg" alt="Удалить" />
      </div>
    </div>
    <div className="font-normal leading-[150%] tracking-[0px] w-[723px] h-[15px] flex justify-start items-center ml-[32px]">
      <div className="text-[12px] w-[141px] h-[15px]">Яндекс такси</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Транспорт</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">03.07.2024</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">750р</div>
      <div className="flex w-[36px] h-[12px] ml-[32px]">
        <img className="w-[12px] h-[12px] mr-[12px]" src="/img_edit.svg" alt="Редактировать" />
        <img className="w-[12px] h-[12px] mr-[1px]" src="/img_del.svg" alt="Удалить" />
      </div>
    </div>
    <div className="font-normal leading-[150%] tracking-[0px] w-[723px] h-[15px] flex justify-start items-center ml-[32px]">
      <div className="text-[12px] w-[141px] h-[15px]">Пятерочка</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">Еда</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">03.07.2024</div>
      <div className="text-[12px] w-[141px] h-[15px] ml-[32px]">3 500р</div>
      <div className="flex w-[36px] h-[12px] ml-[32px]">
        <img className="w-[12px] h-[12px] mr-[12px]" src="/img_edit.svg" alt="Редактировать" />
        <img className="w-[12px] h-[12px] mr-[1px]" src="/img_del.svg" alt="Удалить" />
      </div>
    </div>
  </div>
</div>
    {/* <h2 classNameNameName="text-lg font-semibold mb-2">Список расходов</h2>
    <p>Тут будет список расходов пользователя</p> */}
  </div>
);

export default Expenses;
