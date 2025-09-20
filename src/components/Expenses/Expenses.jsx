const Expenses = () => (
  <div>
  <div className="w-[789px] h-[618px] flex-col rounded-[30px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white mt-[32px]">
    <div className="expenses-table__header">
      <div className="flex items-baseline justify-between ml-[32px]">
        <h2 className="font-montserrat text-2xl font-bold leading-[29px] tracking-normal text-center mt-[32px] mb-[32px]">Таблица расходов</h2>
        <div className="items flex items-center">
          <div className="flex items-baseline relative">
            <div className="text-[12px] font-normal leading-[150%] tracking-normal ml-[130px]">Фильтровать по категории</div>
            <div className="text-[#1fa46c] font-montserrat text-[12px] font-semibold leading-[150%] text-center border-b-[0.5px] border-b-[#1fa46c] ml-[6.5px]">еда</div>
            <img className="h-[7px] w-[7px] ml-[8px]" src="/polygon 3.svg" alt="" />
            {/* модальное окно "фильтр по категориям" */}
              <div className="absolute right-0 top-[24px] w-[176px] h-[240px] p-[12px] box-border border-[0.5px] border-[#999999] rounded-[6px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white">
                <div className="w-[152px] h-[216px] flex flex-col items-start gap-1.5">
                  <div className="flex rounded-[30px] bg-[#dbffe9] px-[20px] py-[8px]">
                    <img className="w-[14px] h-[14px]" src="/bag.svg" alt="" />
                    <p className="text-[#1fa46c] font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Еда</p>
                  </div>
                  <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                    <img className="w-[14px] h-[14px]" src="/car.svg" alt="" />
                    <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Транспорт</p>
                  </div>
                  <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                    <img className="w-[14px] h-[14px]" src="/house.svg" alt="" />
                    <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Жилье</p>
                  </div>
                  <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                    <img className="w-[14px] h-[14px]" src="/gameboy.svg" alt="" />
                    <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Развлечения</p>
                  </div>
                  <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                    <img className="w-[14px] h-[14px]" src="/vuesax_bold_teacher.svg" alt="" />
                    <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Образование</p>
                  </div>
                  <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                   <img className="w-[14px] h-[14px]" src="/message-text.svg" alt="" />
                   <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center ml-[12px]">Другое</p>
                 </div>
                </div>
              </div>
          </div>
          <div className="flex items-baseline relative mr-[34px]">
            <div className="text-[12px] font-normal leading-[150%] tracking-normal ml-[24px]">Сортировать по</div>
            <div className="text-[#1fa46c] font-montserrat text-[12px] font-semibold leading-[150%] text-center border-b-[0.5px] border-b-[#1fa46c] ml-[4px]">дате</div>
            <img className="h-[7px] w-[7px] ml-[8px]" src="/polygon 3.svg" alt="" />
            {/* Модальное окно "Сортировать по дате" */}
            <div className="w-[106px] h-[92px] absolute right-0 top-[24px] p-[12px] box-border border-[0.5px] border-[#999999] rounded-[6px] shadow-[0px_20px_67px_-12px_rgba(0,0,0,0.13)] bg-white">
              <div className="w-[152px] h-[216px] flex flex-col items-start gap-1.5">
                <div className="flex rounded-[30px] bg-[#dbffe9] px-[20px] py-[8px]">
                  <p className="text-[#1fa46c] font-montserrat text-xs font-normal leading-[15px] text-center">Дате</p>
                </div>
                <div className="flex rounded-[30px] bg-gray-100 px-[20px] py-[8px]">
                  <p className="text-black font-montserrat text-xs font-normal leading-[15px] text-center">Сумме</p>
                </div>
              </div>
            </div>
          </div>  
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
</div>
);

export default Expenses;
